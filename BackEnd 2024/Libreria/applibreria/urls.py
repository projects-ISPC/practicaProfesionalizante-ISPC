from django.urls import path, include
from .views import AddContactView
from .views import CatalogueView
from django.conf import settings
from django.conf.urls.static import static
from .views import BookDetailView



urlpatterns = [
    path('add-contact/', AddContactView.as_view(), name='add_contact'),
    #urls para la visualización de libros
    path('catalogue/', CatalogueView.as_view(), name='catalogue'),
    path('book-detail/<int:pk>/', BookDetailView.as_view(), name='book-detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)