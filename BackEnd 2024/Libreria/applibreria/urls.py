from django.urls import path, include
from .views import AddContactView


urlpatterns = [
    path('add-contact/', AddContactView.as_view(), name='add_contact'),
]