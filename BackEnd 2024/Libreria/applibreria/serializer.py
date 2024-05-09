from rest_framework import serializers
from .models import Contact, User, Credential

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        #model = User
        model = Credential
        fields = '__all__'