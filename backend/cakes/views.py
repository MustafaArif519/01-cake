from rest_framework import viewsets
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAdminUser

from .models import Cake, CakeLike, CakeView, Order
from .serializers import CakeSerializer, CakeViewSerializer, CakeLikeSerializer, OrderSerializer
from .permissions import IsAuthorOrReadOnly


class CakeViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Cake.objects.all()
    serializer_class = CakeSerializer

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