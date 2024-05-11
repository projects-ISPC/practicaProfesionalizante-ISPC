from rest_framework import serializers
from .models import Contact, User, Credential

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

#Guardo sólo los datos name y lastname en el formulario de registro
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'lastname', 'id_rol']
 #       model = Credential
 #       fields = '__all__'

class CredentialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credential
        fields = ['email', 'psw']