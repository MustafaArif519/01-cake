from rest_framework import viewsets, pagination
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.authtoken.models import Token


from .models import Cake, CakeLike, CakeView, Order
from .serializers import CakeSerializer, CakeViewSerializer, CakeLikeSerializer, OrderSerializer
from .permissions import IsAuthorOrReadOnly, GuestPermission


class CustomPagination(pagination.PageNumberPagination):
    page_size = 6  # Number of objects to display per page
    page_size_query_param = 'page_size'  # Query parameter for changing the page size
    max_page_size = 100  # Maximum page size allowed]

class CakeViewSet(viewsets.ModelViewSet):
    permission_classes = (GuestPermission,)
    queryset = Cake.objects.all().order_by('-id')
    serializer_class = CakeSerializer
    pagination_class = CustomPagination


class CakeLikeViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = CakeLike.objects.all()
    serializer_class = CakeLikeSerializer

    # def list(self, request, *args, **kwargs):
    #     # Custom logic for handling the GET request
    #     cake_id = request.header.get('cake');
    #     if cake_id:
    #         queryset = super().get_queryset()
    #         # Apply filtering conditions
    #         filtered_queryset = queryset.filter(cake=cake_id)
    #         return filtered_queryset

    #     return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        # Get the token string from the request headers
        authorization_header = request.headers.get('Authorization')
        auth_parts = authorization_header.split()
        token_string = auth_parts[1]

        # Get the token instance
        token = Token.objects.get(key=token_string)
        # Get the associated user
        user = token.user
        # Retrieve the user ID
        user_id = user.id

        # Include the user ID in the request data
        request.data['author'] = user_id

        return super().create(request, *args, **kwargs)



class CakeViewViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = CakeView.objects.all()
    serializer_class = CakeViewSerializer

class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Order.objects.all()
    serializer_class = OrderSerializer