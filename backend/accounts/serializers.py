from allauth.account.adapter import get_adapter

from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import CustomUser


class CustomUserSerializer(RegisterSerializer):
    pNumber = serializers.CharField(max_length=20)
    heard_method = serializers.CharField(max_length=150)

    class Meta:
        model = CustomUser
        fields = ("username", "email", "password", "pNumber", "heard_method",)
    
    def get_cleaned_data(self):
        return{
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'pNumber': self.validated_data.get('pNumber'),
            'heard_from': self.validated_data.get('heard_from'),
        }
    
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.pNumber = self.cleaned_data.get('age')
        user.heard_from = self.cleaned_data.get('heard_from')
        user.save()
        adapter.save_user(request, user, self)
        return user