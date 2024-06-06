from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path('add-contact/', AddContactView.as_view(), name='add_contact'),
    path('register/', AddRegisterView.as_view(), name='register'),
    path('catalogue/', CatalogueView.as_view(), name='catalogue'),
    path('book-detail/<int:pk>/', BookDetailView.as_view(), name='book-detail'),    
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('payment/', AddPaymentView.as_view(), name='payment'),
    path('sale/', AddSaleView.as_view(), name='sale'),
    path('products/', AddProductsView.as_view(), name='products')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)