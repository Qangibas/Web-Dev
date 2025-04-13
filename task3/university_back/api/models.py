from django.db import models

class University(models.Model):
    name = models.CharField(max_length=225)
    description = models.TextField()
    city = models.CharField(max_length=225)
    address = models.TextField()

    def __str__(self):
        return self.name

class Internship(models.Model):
    title = models.CharField(max_length=225)
    description = models.TextField()
    stipend = models.FloatField()
    corresponding = models.ForeignKey(University, on_delete=models.CASCADE)

    def __str__(self):
        return self.title