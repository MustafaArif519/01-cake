# serializers.py in the users Django app
from django.db import transaction
from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer

from accounts.models import heard_selection


class CustomRegisterSerializer(RegisterSerializer):
    heard_from = serializers.ChoiceField(choices=heard_selection)
    phone_number = serializers.CharField(max_length=30)
    firstname = serializers.CharField(max_length=100)
    lastname = serializers.CharField(max_length=100)

    # Define transaction.atomic to rollback the save operation in case of error
    @transaction.atomic
    def save(self, request):
        user = super().save(request)
        user.heard_from = self.data.get('heard_from')
        user.phone_number = self.data.get('phone_number')
        user.firstname = self.data.get('firstname')
        user.lastname = self.data.get('lastname')
        user.save()
        return user