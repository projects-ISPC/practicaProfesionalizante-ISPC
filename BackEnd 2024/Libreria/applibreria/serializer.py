from rest_framework import serializers
from .models import *

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['email', 'name', 'message']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id_user', 'name', 'lastname', 'dni', 'address_province', 'address_location', 'address_street', 'address_number', 'id_rol']

class CredentialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credential
        fields = ['id_user', 'email', 'psw']
        
    def validate_email(self, value):
        if Credential.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = ['id_sal', 'sale_date', 'delivery_type', 'payment_type', 'total_quantity', 'total_cost']

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id_pay', 'namecard', 'numbercard', 'exp_date', 'id_user']

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'