from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


    def create(self, validated_data):
        userProfile = UserProfile.objects.create(**validated_data)
        return userProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class AppointmentSerializer(serializers.Serializer):
    datetime = serializers.DateTimeField(required=True)
    doctor = serializers.CharField(required=True)