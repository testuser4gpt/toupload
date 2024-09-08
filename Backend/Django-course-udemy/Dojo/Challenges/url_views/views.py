from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseNotAllowed

# Create your views here.

def index(request):
    return HttpResponse("Welcome to Django")

def age_check(request,pk):      # Note that django uses same name argument for dynamic-routing, i.e
                                # having same name in url and view parameter : <int:pk> and def func(request,pk)
    if pk <18:
        return HttpResponseNotAllowed("You are not allowed in this page")
    else:
        return HttpResponse("Welcome to Adulthood")