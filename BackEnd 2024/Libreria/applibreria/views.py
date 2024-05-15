from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import ContactSerializer, CredentialSerializer, UserSerializer

from .serializer import ContactSerializer
from .serializer import BookSerializer
from .models import Book, BookGenre, Genre, Credential
from django.http import Http404, JsonResponse
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

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        psw = request.data.get('password')
        user = Credential.objects.filter(email=email, psw=psw)
        print(user[0])
        if user.exists():
            response_data = {
                'id_user': user[0].id_user.id_user,
                'name': user[0].id_user.name,
                'lastname': user[0].id_user.lastname,
                'dni': user[0].id_user.dni,
                'address_province': user[0].id_user.address_province,
                'address_location': user[0].id_user.address_location,
                'address_street': user[0].id_user.address_street,
                'address_number': user[0].id_user.address_number,
                'id_rol': user[0].id_user.id_rol.id_rol,
                'email': user[0].email
            }
            return Response(response_data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Credenciales incorrectas'}, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    def post(self, request):
        return Response({'response': 'Deslogeo exitoso'}, status=status.HTTP_200_OK)