# models.py in the users Django app
from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token
from django.conf import settings


heard_selection = [
    ('I', 'Instagram'),
    ('F', 'Facebook'),
    ('OS', 'Online Search'),
    ('FF', 'Friends / Family'),
    ('O', 'Other'),
]


class CustomUser(AbstractUser):
    # We don't need to define the email attribute because is inherited from AbstractUser
    phone_number = models.CharField(max_length=30)
    heard_from = models.CharField(max_length=30, choices=heard_selection)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(blank=False, null=False)


# class CustomToken(Token):

#     class Meta:
#         verbose_name = 'Custom Token'
#         verbose_name_plural = 'Custom Tokens'