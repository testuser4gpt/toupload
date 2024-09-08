from django.shortcuts import render
from django.http import HttpResponse
from .models import Notes

# Create your views here.

def homepage(request):
    return render(request,"base/home.html")

def notes(request):
    pass