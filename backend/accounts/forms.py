from allauth.account.utils import (filter_users_by_email, user_pk_to_url_str, user_username)
from allauth.utils import build_absolute_uri
from allauth.account.adapter import get_adapter
from allauth.account.forms import default_token_generator
from allauth.account import app_settings
from dj_rest_auth.serializers import PasswordResetSerializer
from dj_rest_auth.forms import AllAuthPasswordResetForm
from django.contrib.sites.shortcuts import get_current_site



class CustomAllAuthPasswordResetForm(AllAuthPasswordResetForm):

    def clean_email(self):
        """
        Invalid email should not raise error, as this would leak users
        for unit test: test_password_reset_with_invalid_email
        """
        email = self.cleaned_data["email"]
        email = get_adapter().clean_email(email)
        self.users = filter_users_by_email(email, is_active=True)
        return self.cleaned_data["email"]

    def save(self, request, **kwargs):
        current_site = get_current_site(request)
        email = self.cleaned_data['email']
        token_generator = kwargs.get('token_generator', default_token_generator)

        for user in self.users:
            temp_key = token_generator.make_token(user)

            path = f"custom_password_reset_url/{user_pk_to_url_str(user)}/{temp_key}/"
            print(user_pk_to_url_str(user), temp_key)
            url = build_absolute_uri(request, path)
            base_url = "http://localhost:5173"
            query_params = {
                "id": user_pk_to_url_str(user),
                "token": temp_key
            }

            full_url = base_url + "?" + "&".join(f"{key}={value}" for key, value in query_params.items())
            # print(full_url)

            # print(temp_key)
     #Values which are passed to password_reset_key_message.txt
            context = {
                "current_site": current_site,
                "user": user,
                "password_reset_url": full_url,
                "request": request,
                "path": path,
            }

            if app_settings.AUTHENTICATION_METHOD != app_settings.AuthenticationMethod.EMAIL:
                context['username'] = user_username(user)
            get_adapter(request).send_mail(
                'account/email/password_reset_key', email, context
            )

        return self.cleaned_data['email']
class MyPasswordResetSerializer(PasswordResetSerializer):

    def validate_email(self, value):
        # use the custom reset form
        self.reset_form = CustomAllAuthPasswordResetForm(data=self.initial_data)
        if not self.reset_form.is_valid():
            raise serializers.ValidationError(self.reset_form.errors)

        return value