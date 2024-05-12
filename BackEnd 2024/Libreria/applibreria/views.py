from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout  # Fügen Sie dies hinzu
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import ContactSerializer, CustomUserSerializer, UserSerializer  # Korrigieren Sie den Import
from rest_framework.permissions import AllowAny, IsAuthenticated

# Create your views here.

class AddContactView(APIView):
    permission_classes = [AllowAny]  # Eventuell hinzufügen, falls öffentlich zugänglich

    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Zurückgeben der Daten
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
            return Response(CustomUserSerializer(user).data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        logout(request)
        return Response({"message": "Successfully logged out"}, status=status.HTTP_200_OK)


