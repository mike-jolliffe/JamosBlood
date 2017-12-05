from django.db import models

class EmailList(models.Model):
    email = models.CharField(max_length=100)

class Show(models.Model):
    date = models.DateTimeField()
    venue = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True, null=True)
    city = models.CharField(max_length=100)
    image = models.ImageField(null=True, blank=True)
    emails = models.ForeignKey(EmailList, related_name='emails')