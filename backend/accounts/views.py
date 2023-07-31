from django.views import View
from django.http import HttpResponse
from rest_framework.authtoken.models import Token
from rest_framework import generics
from dj_rest_auth.registration.views import RegisterView


class UserIdView(View):
    def get(self, request):
        print("request: ", request.headers)
        authorization_header = request.headers.get('Authorization')
        auth_parts = authorization_header.split()
        token_string = auth_parts[1]
        token = Token.objects.get(key=token_string)
        user = token.user
        user_id = user.id

        return HttpResponse(user_id)
    
# class CustomRegisterView(RegisterView):
#     serializer_class = CustomUserSerializer
