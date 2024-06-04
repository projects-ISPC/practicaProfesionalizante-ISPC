from django.contrib import admin
from .models import Role, User, Credential, Payment, Contact, Autor, Publisher, Genre, Book, BookGenre, Sale, Products

# Register your models here.

class RoleAdmin(admin.ModelAdmin):
    list_display = ("name",)

class UserAdmin(admin.ModelAdmin):
    list_display = ("name", "lastname", "dni", "address_province", "address_location", "address_street", "address_number", "id_rol")

class CredentialAdmin(admin.ModelAdmin):
    list_display = ("id_user", "email")

class PaymentAdmin(admin.ModelAdmin):
    list_display = ("namecard", "numbercard", "exp_date", "id_user")

class ContactAdmin(admin.ModelAdmin):
    list_display = ("email", "message", "name")

class AutorAdmin(admin.ModelAdmin):
    list_display = ("name",)

class PublisherAdmin(admin.ModelAdmin):
    list_display = ("name",)

class GenreAdmin(admin.ModelAdmin):
    list_display = ("name",)

class BookAdmin(admin.ModelAdmin):
    list_display = ("isbn", "title", "pages", "releaseyear", "bookcover", "stock", "synopsis", "price", "id_aut", "id_pub")

class BookGenreAdmin(admin.ModelAdmin):
    list_display = ("id_book", "id_gen")

class SaleAdmin(admin.ModelAdmin):
    list_display = ("id_sal", "sale_date", "delivery_type", "payment_type", "total_quantity", "total_cost", "id_user")

class ProductsAdmin(admin.ModelAdmin):
    list_display = ("id_book", "id_sal", "amount")

admin.site.register(Role, RoleAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(Credential, CredentialAdmin)
admin.site.register(Payment, PaymentAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Autor, AutorAdmin)
admin.site.register(Publisher, PublisherAdmin)
admin.site.register(Genre, GenreAdmin)
admin.site.register(Book, BookAdmin)
admin.site.register(BookGenre, BookGenreAdmin)
admin.site.register(Sale, SaleAdmin)
admin.site.register(Products, ProductsAdmin)
