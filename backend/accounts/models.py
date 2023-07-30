from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class CustomUser(AbstractUser):
    pNumber = models.CharField(null=True, blank=True, max_length=20)
    heard_method = models.CharField(null=True, blank=True, max_length=150)

    def __str__(self):
        return self.username

CustomUser._meta.get_field('groups').remote_field.related_name = 'custom_user_groups'
CustomUser._meta.get_field('user_permissions').remote_field.related_name = 'custom_user_permissions'