from django.contrib import admin
from .models import Cake, CakeLike, CakeView

# Register your models here.
admin.site.register(Cake)
admin.site.register(CakeLike)
admin.site.register(CakeView)
# admin.site.register(Order)