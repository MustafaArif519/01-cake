from rest_framework import viewsets, pagination
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAdminUser

from .models import Cake, CakeLike, CakeView, Order
from .serializers import CakeSerializer, CakeViewSerializer, CakeLikeSerializer, OrderSerializer
from .permissions import IsAuthorOrReadOnly


class CustomPagination(pagination.PageNumberPagination):
    page_size = 4  # Number of objects to display per page
    page_size_query_param = 'page_size'  # Query parameter for changing the page size
    max_page_size = 100  # Maximum page size allowed]

class CakeViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Cake.objects.all().order_by('-id')
    serializer_class = CakeSerializer
    pagination_class = CustomPagination


class CakeLikeViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = CakeLike.objects.all()
    serializer_class = CakeLikeSerializer

class CakeViewViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = CakeView.objects.all()
    serializer_class = CakeViewSerializer

class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Order.objects.all()
    serializer_class = OrderSerializer