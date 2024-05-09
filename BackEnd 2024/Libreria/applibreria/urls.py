from django.urls import path, include
from .views import AddContactView
from applibreria.views import AddRegisterView

urlpatterns = [
    path('add-contact/', AddContactView.as_view(), name='add_contact'),
    # Ruta para la vista de registro
    path('register/', AddRegisterView.as_view(), name='register'),
]