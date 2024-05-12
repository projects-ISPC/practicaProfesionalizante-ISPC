from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout  # Fügen Sie dies hinzu
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import ContactSerializer, CredentialSerializer  # Korrigieren Sie den Import
from rest_framework.permissions import AllowAny, IsAuthenticated

# CustomUserSerializer es importado en realidad en .serializer
# Create your views here.


class AddContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response( status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)  # Asumiendo que `USERNAME_FIELD` en tu modelo User es `email`
        if user:
            login(request, user)  # Inicia sesión del usuario
            return Response(CredentialSerializer(user).data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# class LoginView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         email = request.data.get('email', None)
#         password = request.data.get('password', None)
#         user = authenticate(request, email=email, password=password)
#         if user:
#             login(request, user)
#             return Response(CustomUserSerializer(user).data, status=status.HTTP_200_OK)
#         else:
#             return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        logout(request)
        return Response({"message": "Successfully logged out"}, status=status.HTTP_200_OK)


