from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Appointment(models.Model):
    # TODO: Make a model for doctors and link it here (after the hackathon)
    scheduled_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    doctor = models.CharField(max_length=150, null=True, blank=True)
    user_profile = models.ForeignKey('UserProfile', on_delete=models.CASCADE, null=True, blank=True, related_name="appointments_made")
    datetime = models.DateTimeField(blank=True, null=True)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(null=True, blank=True)
    first_name = models.CharField(verbose_name="First Name", max_length=150, null=True, blank=True)
    last_name = models.CharField(verbose_name="Last Name", max_length=150, null=True, blank=True)
    disability = models.CharField(max_length=150, null=True, blank=True)
    diagnosis = models.TextField(max_length=999, null=True, blank= True)
    # TODO: Add a background task to delete the chat log once a while or when it reaches the max length (after the hackathon)
    chat_log = models.TextField(max_length=99999, null=True, blank=True)

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def __str__(self):
        return f"{self.full_name} (ID: {self.id})"