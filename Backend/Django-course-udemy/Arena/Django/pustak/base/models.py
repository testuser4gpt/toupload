from django.db import models

# Create your models here.


class Notes(models.Model):
    name = models.CharField(max_length=50, null=False)
    note = models.CharField(max_length=10000000, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
