from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import *
from .models import *
from django.utils import timezone
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

class BookDetailView(APIView):
    def get_object(self, pk):
        try:
            return Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            raise Http404

    def get_book_data(self, book):
        return {
            'id_book': book.id_book, 
            'isbn': book.isbn,
            'author': book.id_aut.name,
            'publisher': book.id_pub.name,                
            'title': book.title, 
            'page_amount': book.pages, 
            'bookcover': book.bookcover, 
            'stock': book.stock,
            'release_year': book.releaseyear,
            'synopsis': book.synopsis,
            'price': book.price,
            'tags': "No se que es... ( ˘︹˘ )"
        }

    def get(self, request, pk, format=None):
        book = self.get_object(pk)
        book_data = self.get_book_data(book)
        return JsonResponse(book_data, safe=False)

class CatalogueView(APIView):
    def get(self,request):
        books = Book.objects.all()
        lib = []
        for book in books:      
            lib.append({
                'id_book': book.id_book, 
                'title': book.title, 
                'author': book.id_aut.name,
                'bookcover': book.bookcover
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

""" class SaleView(APIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer

class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer """

class AddPaymentView(APIView):
    def post(self, request):
        serializer = PaymentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response( status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AddSaleView(APIView):
    def post(self, request):
        serializer = SaleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response( status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
class AddProductsView(APIView):
    def post(self, request):
        serializer = ProductsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response( status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

""" class AddSaleView(APIView):
    def post(self, request):
        user = request.user  # Obtén el usuario logueado
        data = request.data.copy()
        data['id_user'] = user.id_user  # Asigna el id del usuario logueado
        
        # Campos con valores por defecto ya se manejan en el modelo, no es necesario pasarlos
        
        serializer = SaleSerializer(data=data)
        if serializer.is_valid():
            sale = serializer.save()
            sale.sale_date = timezone.now()  # Generar la fecha de venta automáticamente
            sale.save()
            return Response({"id_sal": sale.id_sal}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

 """


