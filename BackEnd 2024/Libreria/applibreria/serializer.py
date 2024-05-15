from rest_framework import serializers
from .models import Contact, User, Credential
from .models import Contact
from .models import Book

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

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

