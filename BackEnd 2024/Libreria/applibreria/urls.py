from django.urls import path, include
from .views import AddContactView, AddRegisterView

urlpatterns = [
    path('add-contact/', AddContactView.as_view(), name='add_contact'),
    path('register/', AddRegisterView.as_view(), name='register'),
]