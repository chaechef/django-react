from rest_framework import serializers
from .models import Chicken

class ChickenSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        fields = (
            'id',
            'brand',
            'name',
            'desc',
            'image',
        )
        model = Chicken