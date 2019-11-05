from django.contrib import admin
from .models import Chicken
# Register your models here.

@admin.register(Chicken)
class ChickenAdmin(admin.ModelAdmin):
    list_display = ('brand', 'name', 'desc','image')