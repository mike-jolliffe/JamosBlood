from django.shortcuts import render


def home(request):
    return render(request, "home.html")

def shows(request):
    return render(request, "shows.html")

def music(request):
    return render(request, "music.html")

def contact(request):
    return render(request, "contact.html")

def bio(request):
    return render(request, "bio.html")

def photos(request):
    return render(request, "photos.html")