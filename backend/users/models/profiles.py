"""
Profile models for different user types.
"""
from django.db import models
from .user import User

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    roll_number = models.CharField(max_length=20)
    course = models.CharField(max_length=100)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    cgpa = models.DecimalField(max_digits=4, decimal_places=2)
    skills = models.TextField()
    
    def __str__(self):
        return f"{self.user.email} - {self.roll_number}"

class CompanyProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=200)
    industry = models.CharField(max_length=100)
    description = models.TextField()
    website = models.URLField()
    
    def __str__(self):
        return self.company_name