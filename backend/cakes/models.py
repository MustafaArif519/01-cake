from django.db import models
from django.conf import settings
from django.db.models.signals import post_delete




# Create your models here.
class Cake(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to="cakes/", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.title

# class Order(models.Model):
#     customer = models.CharField(max_length=100)
#     name = models.CharField(max_length=100)
#     phone_number = models.CharField(max_length=100)
#     event_details = models.CharField(max_length=300)
#     event_type = models.CharField(max_length=100)
#     event_date = models.CharField(max_length=100)
#     pastery = models.CharField(max_length=50)
#     cake_size = models.CharField(max_length=100)
#     cake_size_other = models.CharField(max_length=100)
#     cake_flavor = models.CharField(max_length=100)
#     cake_flavor_other = models.CharField(max_length=100)
#     cake_frosting = models.CharField(max_length=100)
#     cake_frosting_other = models.CharField(max_length=100)
#     cake_design = models.CharField(max_length=200)
#     cake_color = models.CharField(max_length=100)
#     cake_message = models.CharField(max_length=100)
#     cake_inspiration_file = models.CharField(max_length=100)
#     cake_additions = models.CharField(max_length=300)
#     cake_treats = models.CharField(max_length=100)
#     cake_treats_other = models.CharField(max_length=100)
#     cake_treat_details = models.CharField(max_length=100)
#     transport = models.CharField(max_length=50)
#     delivery_pickup = models.CharField(max_length=100)
#     delivery_address = models.CharField(max_length=100)
#     delivery_time = models.CharField(max_length=100)
#     pickup_time = models.CharField(max_length=100)
#     pickup_time_other = models.CharField(max_length=100)
#     payment_method = models.CharField(max_length=100)
#     payment_method_other = models.CharField(max_length=100)
#     created_at = models.DateTimeField(auto_now_add=True)
    
#     def __int__(self):
#         return self.id


class CakeLike(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    cake = models.ForeignKey(Cake, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __int__(self):
        return self.id

class CakeView(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    cake = models.ForeignKey(Cake, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __int__(self):
        return self.id