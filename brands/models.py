from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Brand(models.Model):
    brand_name = models.CharField(max_length=100)
    logo = models.CharField(max_length=500)
    ranking = models.CharField(max_length=50, blank=True, null=True)
    our_ranking = models.CharField(max_length=50, blank=True, null=True)
    category = models.ForeignKey(Category, related_name='brand', on_delete=models.PROTECT)
    description = models.CharField(max_length=2000)
    report_link = models.CharField(max_length=500, blank=True, null=True)
    company_website = models.CharField(max_length=500)
    owner = models.ForeignKey(User, related_name='brand', on_delete=models.CASCADE)


    def __str__(self):
        return f'{self.brand_name} - {self.ranking}'
