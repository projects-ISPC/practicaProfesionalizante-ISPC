from django.urls import path, include
from .views  import AddContactView, LoginView, LogoutView
# from .api import LoginView, LogoutView


urlpatterns = [
    path('add-contact/', AddContactView.as_view(), name='add_contact'),
    path('auth/login/',LoginView.as_view(), name='auth_login'),
    path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    path('auth/reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
]