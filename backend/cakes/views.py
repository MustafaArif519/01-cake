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

    def list(self, request, *args, **kwargs):
        # Custom logic for handling the GET request
        cake_id = request.body.get('cake');
        get_like_bool = False
        if request.body.get('get like bool'):
            get_like_bool = True
        
        if cake_id and not get_like_bool:
            # Retrieve the likes that pertain to a certain cake
            objects = self.filter_queryset(self.get_queryset())

            # Serialize the objects
            serializer = self.get_serializer(objects, many=True)

            # Return the serialized data
            return Response(serializer.data)

        if cake_id and not get_like_bool:
            # Retrieve the likes that pertain to a particular 
            objects = self.filter_queryset(self.get_queryset())

            # Serialize the objects
            serializer = self.get_serializer(objects, many=True)

            # Return the serialized data
            return Response(serializer.data)

        # Retrieve the objects from the queryset
        objects = self.filter_queryset(self.get_queryset())

        # Serialize the objects
        serializer = self.get_serializer(objects, many=True)

        # Return the serialized data
        return Response(serializer.data)

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