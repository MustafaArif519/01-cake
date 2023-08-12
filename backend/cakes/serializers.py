from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Cake, CakeLike, CakeView


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ("id, username", "first_name", "last_name",)

class CakeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "title",
            "description",
            "image",
            "created_at"
        )
        model = Cake

# Comment Serializer
# class OrderSerializer(serializers.ModelSerializer):
#     class Meta:
#         fields = (
#             "id",
#             "customer",
#             "description",
#             "created_at",
#         )
#         model = Order

# Comment Reply Serial
class CakeLikeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "author",
            "cake",
            "created_at",
        )
        model = CakeLike

# Post Like serial
class CakeViewSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "author",
            "cake",
            "created_at",
        )
        model = CakeView

