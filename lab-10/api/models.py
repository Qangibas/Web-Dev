from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField()
    salary = models.PositiveIntegerField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return self.name