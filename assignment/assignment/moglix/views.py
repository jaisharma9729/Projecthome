from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import HeaderModel
from .serializers import HeaderModelSerializer
from .models import SolarEnergyData
from .serializers import SolarEnergyDataSerializer

# Create your views here.

@api_view(['GET'])
def get_data(request):
    header_data = HeaderModel.objects.all()
    serializer = HeaderModelSerializer(header_data, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_sollar(request):
    solar_data = SolarEnergyData.objects.all()
    serializer = SolarEnergyDataSerializer(solar_data, many=True)
    return Response(serializer.data)