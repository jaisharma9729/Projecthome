from django.contrib import admin
from django.urls import path, include
from . views import *

urlpatterns = [
    path('get_data/', get_data, name='get_data' ), 
    path('get_solar/', get_sollar, name='get_sollar')  
]