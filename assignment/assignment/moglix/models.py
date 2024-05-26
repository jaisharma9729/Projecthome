from django.db import models



class HeaderModel(models.Model):
    heading = models.CharField(max_length=500, null=True, blank=True)
    ancher = models.CharField(max_length=500, null=True, blank=True)
    sub_heading = models.CharField(max_length=500, null=True, blank=True)



class SolarEnergyData(models.Model):
    title = models.CharField(max_length=20, null=True, blank=True)
    sub_head = models.CharField(max_length=200, null=True, blank=True)
    target = models.CharField(max_length=20, null=True, blank=True)