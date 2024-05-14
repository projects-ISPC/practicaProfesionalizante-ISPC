from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import ContactSerializer, CredentialSerializer, UserSerializer

# Create your views here.

class AddContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response( status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AddRegisterView(APIView):
    def post(self, request):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            user_id = user.id_user
            
            # Crear las credenciales asociadas
            credential_data = {'id_user': user_id, 'email': request.data.get('email'), 'psw': request.data.get('psw')}
            credential_serializer = CredentialSerializer(data=credential_data)
            if credential_serializer.is_valid():
                credential_serializer.save()
                return Response({'id_user': user_id}, status=status.HTTP_201_CREATED)
            else:
                user.delete()  # Eliminar el usuario creado si hay un error al crear las credenciales
                return Response(credential_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
