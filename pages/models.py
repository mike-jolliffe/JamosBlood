from django.db import models

class EmailList(models.Model):
    email = models.CharField(max_length=100)