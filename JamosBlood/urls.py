"""JamosBlood URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from pages import views as page_views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', page_views.home, name='home'),
    url(r'shows/', page_views.ShowsList.as_view(), name='shows'),
    url(r'shows/(?P<pk>[0-9]+)/$', page_views.ShowDetails.as_view(), name='show_detail'),
    url(r'music/', page_views.music, name='music'),
    url(r'contact/', page_views.contact, name='contact'),
    url(r'bio/', page_views.bio, name='bio'),
    url(r'photos/', page_views.photos, name='photos'),
    url(r'email/', page_views.get_email, name='email')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
