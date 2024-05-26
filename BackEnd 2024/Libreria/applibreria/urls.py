from django.urls import path, include
from .views import AddContactView
from .views import CatalogueView
from .views import AddRegisterView
from .views import LoginView
from .views import LogoutView
from django.conf import settings
from django.conf.urls.static import static
from .views import BookDetailView

urlpatterns = [
    path('add-contact/', AddContactView.as_view(), name='add_contact'),
    path('register/', AddRegisterView.as_view(), name='register'),
    path('catalogue/', CatalogueView.as_view(), name='catalogue'),
    path('book-detail/<int:pk>/', BookDetailView.as_view(), name='book-detail'),    
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)