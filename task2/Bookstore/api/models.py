from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=225)
    author = models.CharField(max_length=225)
    price = models.FloatField()
    stock = models.IntegerField()
    is_available = models.BooleanField()

    def __str__(self):
        return self.title