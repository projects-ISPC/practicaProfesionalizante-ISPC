from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import ContactSerializer
from .serializer import BookSerializer
from .models import Book


# Create your views here.

class AddContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response( status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CatalogueView(APIView):
    def get(self, request):
        print("Llamado a la vista CatalogueView")
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)