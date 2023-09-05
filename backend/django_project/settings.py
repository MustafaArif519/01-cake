"""
Django settings for django_project project.

Generated by 'django-admin startproject' using Django 4.2.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
from environs import Env
import os

env = Env()
env.read_env()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env.str("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool("DEBUG", default=False)

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    # 3rd party
    "rest_framework",
    "corsheaders",
    "rest_framework.authtoken",
    "dj_rest_auth",
    "dj_rest_auth.registration",
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    "allauth.socialaccount.providers.github",
    "drf_spectacular",
    'django_cleanup.apps.CleanupConfig',
    # For adding google sign in authentication
    "allauth.socialaccount.providers.google",
    # local apps
    "accounts.apps.AccountsConfig",
    "cakes.apps.CakesConfig",
]

# For google sign in authentication
SOCIALACCOUNT_PROVIDERS = {
    "google": {
        "APP": {
            "client_id": "233170599832-ucmqjtfc137qoddrnjdn22793j9cj56r.apps.googleusercontent.com",  # replace me
            "secret": "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",        # replace me
            "key": "",                               # leave empty
        },
        "SCOPE": [
            "profile",
            "email",
        ],
        "AUTH_PARAMS": {
            "access_type": "online",
        },
        "VERIFIED_EMAIL": True,
    },
}

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/' # 'http://myhost:port/media/'

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
    "DEFAULT_AUTHENTICATION_CLASSES":[
        "rest_framework.authentication.SessionAuthentication",
        "rest_framework.authentication.TokenAuthentication",
    ],
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
}

SPECTACULAR_SETTINGS = {
    "TITLE": "Cake boutique website backend",
    "DESCRIPTION": "As per title (Piazza joke if anyone gets it)",
    "VERSION": "0.1.0",
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    # cors related middleware
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    # 'social_django.middleware.SocialAuthExceptionMiddleware',  # <--
]

CORS_ORIGIN_WHITELIST = (
    "http://localhost:5173",
    "http://localhost:8000",
)

# CSRF_TRUSTED_ORIGINS = ["http://localhost:5173"]

ROOT_URLCONF = 'django_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                "django.template.context_processors.request",

#                 'social.apps.django_app.context_processors.backends',
# 'social.apps.django_app.context_processors.login_redirect',
            ],
        },
    },
]




SITE_ID = 2
# To set site_name and site_domain you must either do this manually


WSGI_APPLICATION = 'django_project.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'accounts.CustomUser'
# ACCOUNT_EMAIL_VERIFICATION = 'mandatory'  # or 'optional'


# Rootstrap email backend tutorial
AUTHENTICATION_BACKENDS = [
    # allauth specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
    # Needed to login by username in Django admin, regardless of allauth
    'django.contrib.auth.backends.ModelBackend',
    # Let's see if this works
    # 'social_core.backends.github.GithubOAuth2',

]

ACCOUNT_AUTHENTICATION_METHOD = 'username_email'
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_EMAIL_VERIFICATION = 'none'
FRONTEND_URL = 'localhost:5173/'

REST_AUTH  = {
    'REGISTER_SERIALIZER': 'accounts.serializers.CustomRegisterSerializer',
     'USER_DETAILS_SERIALIZER': 'accounts.serializers.CustomUserDetailsSerializer',
     'PASSWORD_RESET_USE_SITES_DOMAIN': True,
     'PASSWORD_RESET_SERIALIZER': 'accounts.forms.MyPasswordResetSerializer',
}

REST_USE_JWT = True
JWT_AUTH_COOKIE = 'my-app-auth' # The cookie key name can be the one you want
ACCOUNT_EMAIL_VERIFICATION = 'optional'
ACCOUNT_CONFIRM_EMAIL_ON_GET = True
LOGIN_URL = 'http://localhost:5173'

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],  # new
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]
# CUSTOM_PASSWORD_RESET_CONFIRM = 'http://localhost:5173/rest-auth/password/reset/confirm/'
LOGOUT_ON_PASSWORD_CHANGE = False


# # Following settings are that for AWS SES sandbox mode configuration!


# You're accessing the development server over HTTPS, but it only supports HTTP. ERROR FIX ATTEMPT
# reason for error was ing LOGIN_URL redirect url included HTTPS by accident!


# FRONTEND_URL = 'localhost:5173/'
# ACCOUNT_EMAIL_CONFIRMATION_URL = FRONTEND_URL + 'verify-email/{}'
# ACCOUNT_PASSWORD_RESET_CONFIRM = FRONTEND_URL + 'password-reset/confirm/'