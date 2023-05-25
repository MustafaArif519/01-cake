from django.urls import path

# draft endpoints
from .views import CakeViewSet, CakeLikeViewSet, CakeViewViewSet, OrderViewSet
from rest_framework.routers import SimpleRouter


router = SimpleRouter()
router.register("cakes", CakeViewSet, basename="cakes")
router.register("cake-likes", CakeLikeViewSet, basename="cake-likes")
router.register("cake-views", CakeViewViewSet, basename="cake-views")
router.register("orders", OrderViewSet, basename="orders")


urlpatterns = router.urls