from django.db import models

# Create your models here.

class Chicken(models.Model):
    objects = models.Manager()
    brand = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    desc = models.TextField()
    #image = models.FileField(upload_to='images',blank=True)
    image = models.ImageField(default='default_image.PNG')

    def __str__(self):
        return self.name