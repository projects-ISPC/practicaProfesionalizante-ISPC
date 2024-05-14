from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import ContactSerializer
from .serializer import BookSerializer
from .models import Book, BookGenre, Genre
from django.http import Http404, JsonResponse
# Create your views here.

class AddContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response( status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#¿Esta view es necesaria?

class BookDetailView(APIView):
    def get_object(self, pk):
        try:
            return Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        book = self.get_object(pk)
        serializer = BookSerializer(book)
        return Response(serializer.data)

class CatalogueView(APIView):
    def get(self,request):
        books = Book.objects.all()
        lib = []
        for book in books:
            genres = BookGenre.objects.filter(id_book=book.id_book)
            g = []
            for obj in genres:
                g.append(obj.id_gen)           
            lib.append ({
                'id_book':book.id_book, 
                'isbn': book.isbn,
                'author':book.id_aut.name,
                #'genres': g, 
                'title': book.title, 
                'page_amount': book.pages, 
                'bookcover': book.bookcover, 
                'stock': book.stock,
                'release_year': book.releaseyear,
                'synopsis': book.synopsis,
                'price': book.price,
                'tags': "No se que es... ( ˘︹˘ )"
                })
        response_data= lib
        return JsonResponse(response_data, safe=False)