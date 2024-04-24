from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from django.forms.models import model_to_dict
from django.middleware.csrf import get_token
from django.contrib.auth.models import User
from .models import UserProfile
from .serializers import *
from .forms import *

# Create your views here.

@api_view(['POST'])
def login_view(request):
    if request.method == "POST":
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return Response({"message": "User logged in successfully", "success": True})
        else:
            return Response({"message": "No user found with the provided credentials", "success": False}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
def check_auth(request):
    if request.user.is_authenticated:
        return Response({'isAuthenticated': True})
    else:
        return Response({'isAuthenticated': False})

@api_view(['POST'])
def signup(request):
    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            if request.data.get("password") == request.data.get("confirmPassword"):
                user = serializer.save()
                login(request, user)
                print("logged in the user")
                UserProfile.objects.create(user=user, email=request.data.get("email"), first_name=request.data.get("firstName"), last_name=request.data.get("lastName"))
                print("created userprofile")
                return Response({"success": True}, status=status.HTTP_201_CREATED)
            else:
                return Response({"success": False, "message": "Passwords don't match"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_csrf_token(request):
    csrf_token = get_token(request)
    return Response({"csrfToken": csrf_token})

@api_view(['GET'])
def get_user_data(request):
    if request.method == "GET":
        if request.user.is_authenticated:
            userprofile = request.user.userprofile
            userprofile_data = model_to_dict(userprofile)
            userprofile_data["appointments_made"] = [model_to_dict(appointment) for appointment in userprofile.appointments_made.all()]
            return Response(userprofile_data, status=status.HTTP_200_OK)
        return Response({"error": "Unauthorized (User is not logged in)"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def set_appointment(request):
    if request.method == "POST":
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            if request.user.is_authenticated:
                datetime = serializer.validated_data.get("datetime")
                doctor = serializer.validated_data.get("doctor")
                Appointment.objects.create(datetime=datetime, doctor=doctor, user_profile=request.user.userprofile)
                return Response({"success": True}, status=status.HTTP_201_CREATED)
            return Response({"error": "Unauthorized (User is not logged in)"}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def add_to_chat_log(request):
    if request.method == "POST":
        if request.user.is_authenticated:
            userprofile = request.user.userprofile
            if request.POST.get("log"):
                userprofile.chat_log = userprofile.chat_log + request.POST.get("log")
                return Response({"success": True}, status=status.HTTP_200_OK)
            return Response({"error": "`log` is not found in the request"}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "Unauthorized (User is not logged in)"}, status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['POST'])
def set_diagnosis(request):
    if request.method == "POST":
        if request.user.is_authenticated:
            userprofile = request.user.userprofile
            if request.POST.get("diagnosis"):
                userprofile.diagnosis = request.POST.get("diagnosis")
                return Response({"success": True}, status=status.HTTP_200_OK)
            return Response({"error": "`diagnosis` is not found in the request"}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "Unauthorized (User is not logged in)"}, status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['POST'])
def set_disability(request):
    if request.method == "POST":
        if request.user.is_authenticated:
            userprofile = request.user.userprofile
            if request.POST.get("disability"):
                userprofile.disability = request.POST.get("disability")
                return Response({"success": True}, status=status.HTTP_200_OK)
            return Response({"error": "`disability` is not found in the request"}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "Unauthorized (User is not logged in)"}, status=status.HTTP_401_UNAUTHORIZED)