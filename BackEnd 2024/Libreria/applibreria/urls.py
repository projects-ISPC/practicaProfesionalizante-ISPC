from django.urls import path, include
from .views import AddContactView
from .views import CatalogueView
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('add-contact/', AddContactView.as_view(), name='add_contact'),
    path('catalogue/', CatalogueView.as_view(), name='catalogue'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)