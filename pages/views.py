from django.shortcuts import HttpResponseRedirect, render
from pages.models import EmailList


def home(request):
    return render(request, "home.html")

def get_email(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        email = request.POST.get("email")
        print(email)
        # create a form instance and populate it with data from the request:
        try:
            obj = EmailList.objects.get(email=email)
        except EmailList.DoesNotExist:
            obj = EmailList(email=email)
        obj.save()

        return HttpResponseRedirect('/')

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