from django.urls import path
from . import views


urlpatterns = [
    path("",views.index,name = "Challenge_index"),

    path("<int:month_num>",views.mc_by_num, name= "monthly_challenge_num" ), #Note that we need to place the
                                                                        #Redirect urls above the redirecting url
    
    path("<str:month>",views.mc_by_str, name="monthly_challange_str"),
    #This is redirecting url where the month_num will be redirected to

]
