from django.urls import path

# draft endpoints
from .views import UserIdView


urlpatterns = [
    path("user-id/", UserIdView.as_view(), name='user-id'),
    
    #  path('rest-auth/registration/', CustomRegisterView.as_view(), name='rest_register'),
]