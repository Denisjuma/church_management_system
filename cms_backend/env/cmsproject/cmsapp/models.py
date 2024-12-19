from django.db import models # type: ignore
from django.contrib.auth.models import User # type: ignore


# Create your models here.
class Event(models.Model):
    Title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    image = models.ImageField(null=True, blank=True)
    location = models.CharField(max_length=255)
    organizer = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    registration_deadline = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.Title
    
class Announcement(models.Model):
     title = models.CharField(max_length=255)
     content = models.TextField()
     author = models.CharField(max_length=255)
     publication_date = models.DateField()
     image = models.ImageField(null=True, blank=True)
     expiration_date = models.DateField(null=True, blank=True)
     category = models.CharField(max_length=100)
     priority_level = models.CharField(max_length=50)
     created_at = models.DateTimeField(auto_now_add=True)
     updated_at = models.DateTimeField(auto_now=True)
     
     def __str__(self):
         return self.title
     

class Service(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    
    def __str__(self) -> str:
        return self.name
    

class ServiceRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.TextField(blank=True)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    request_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.service
    
    
class Donation(models.Model):
    donor = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    description = models.CharField(max_length=255)
    contact_info = models.TextField(blank=True)
    status = models.CharField(max_length=20, default='pending') 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.donor