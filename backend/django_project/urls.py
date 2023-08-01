"""
URL configuration for django_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from django.conf.urls.static import static
from django.conf import settings
from dj_rest_auth.registration.views import VerifyEmailView, RegisterView
from allauth.account.views import ConfirmEmailView,  EmailVerificationSentView
from accounts.serializers import CustomRegisterSerializer


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/", include("cakes.urls")),
    path("api-auth/", include("rest_framework.urls")),
    path("api/v1/dj-rest-auth/", include("dj_rest_auth.urls")),
    path("api/v1/dj-rest-auth/registration/",\
        RegisterView.as_view(serializer_class=CustomRegisterSerializer), name='user-registration'),
    # path("api/v1/dj-rest-auth/registration/", include("dj_rest_auth.registration.urls")),
    path("api/v1/", include("accounts.urls")),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/v1/", include("accounts.urls")),
    path("api/schema/redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"),
    path("api/schema/swagger/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger"),
   path('accounts/', include('allauth.urls')),
    path('rest-auth/registration/account-confirm-email/<str:key>/', ConfirmEmailView.as_view(),
         name='account_confirm_email'),
    path('rest-auth/registration/account-email-verification-sent/', EmailVerificationSentView.as_view(),
         name='account_email_verification_sent'),
] + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)
