from django.urls import path
from . import views

urlpatterns = [
    path("",views.index, name ="index"),
    path("<int:pk>/age-check",views.age_check, name="agecheck"),
]
