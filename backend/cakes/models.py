from django.db import models
from django.conf import settings

# Create your models here.
class Cake(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to="cakes/", blank=True)

    def __str__(self):
        return self.title

class Order(models.Model):
    customer = models.CharField(max_length=100)
    description = models.CharField(max_length=400)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __int__(self):
        return self.id


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