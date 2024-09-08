from django.shortcuts import render
from django.http import HttpResponse , HttpResponseBadRequest, HttpResponseNotFound, HttpResponseRedirect
from django.urls import reverse

# Create your views here.
monthly_challenges = {
    "January": "Start a new hobby or learn a new skill.",
    "February": "Practice daily gratitude by writing down three things you're grateful for.",
    "March": "Read a book you've been meaning to get to.",
    "April": "Focus on physical fitness—try a new workout or outdoor activity.",
    "May": "Declutter your living space—organize a room or get rid of things you no longer need.",
    "June": "Volunteer for a cause you care about or help someone in need.",
    "July": "Take a digital detox—limit your screen time and spend more time offline.",
    "August": "Try a new recipe or cook a meal from a different cuisine each week.",
    "September": "Set a new personal or professional goal and create a plan to achieve it.",
    "October": "Focus on mental wellness—practice mindfulness or meditation daily.",
    "November": "Challenge yourself to a creative project, like writing, drawing, or crafting.",
    "December": "Reflect on the year and set intentions for the year ahead."
}


def index(request):
    months = list(monthly_challenges.keys())
    list_items = []

    for month in months:
        month_path = reverse("monthly_challange_str", args=[month])
        list_items.append( f"<li><a href = \"{month_path}\" ><h2>{month}</h2></a></li>" )
    
    unordered_list = f"<ul>{ ''.join(list_items)}</ul>"
    return HttpResponse(unordered_list)



def mc_by_num(request,month_num):

    try:
        mc_list = list(monthly_challenges.keys())
        month = mc_list[month_num -1] #make sure to put error prone things inside try catch block, like this line
        redirect_path = reverse("monthly_challange_str", args=[month]) # it will automatically create url
                                                                        #i.e /challenges/args
        
        return HttpResponseRedirect(redirect_path) #previously we had done ("/challenges" + month) which is static
    except:
        return HttpResponseNotFound("Something went wrong, Please check your input month")


def mc_by_str(request,month):
    
    try:
        month = month.title() #make sure to put error prone things inside try catch block, like this line
        return HttpResponse(monthly_challenges[month])
    except:
        return HttpResponseBadRequest("Something wrong occured, Please rechek your input")