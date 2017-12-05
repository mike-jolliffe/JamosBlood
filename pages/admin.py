from django.contrib import admin
from pages.models import EmailList, Show
from django.conf.locale.es import formats as en_formats

en_formats.DATETIME_FORMAT = "d M Y H:i"

admin.site.register(EmailList)
admin.site.register(Show)
