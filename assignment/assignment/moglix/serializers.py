from rest_framework import serializers
from .models import HeaderModel
from .models import SolarEnergyData

class HeaderModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeaderModel
        fields = '__all__'

class SolarEnergyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolarEnergyData
        fields = '__all__'