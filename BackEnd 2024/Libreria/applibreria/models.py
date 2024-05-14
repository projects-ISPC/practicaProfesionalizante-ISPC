from django.db import models

# Create your models here.

class Role(models.Model):

    id_rol = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, blank=False)
    class Meta:
        db_table = "role"
        verbose_name = "Role"
        verbose_name_plural = "Roles"
    def __unicode__(self):
        return self.name
    def __str__(self):
        return self.name

class User(models.Model):

    id_user = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False)
    lastname = models.CharField(max_length=50, blank=False)
    dni = models.IntegerField(blank=True, null=True)
    address_province = models.CharField(max_length=30, blank=True, null=True)
    address_location = models.CharField(max_length=30, blank=True, null=True)
    address_street = models.CharField(max_length=50, blank=True, null=True)
    address_number = models.IntegerField(blank=True, null=True)
    id_rol = models.ForeignKey(Role, to_field="id_rol", on_delete=models.CASCADE)
    class Meta:
        db_table = "user"
        verbose_name = "User"
        verbose_name_plural = "Users"
    def __unicode__(self):
        return self.name + " " + self.lastname
    def __str__(self):
        return self.name + " " + self.lastname

class Credential(models.Model):

    id_cred = models.AutoField(primary_key=True)
    id_user = models.ForeignKey(User, to_field="id_user", on_delete=models.CASCADE)
    email = models.CharField(max_length=100, blank=False)
    psw = models.CharField(max_length=255, blank=False)
    class Meta:
        db_table = "credential"
        verbose_name = "Credential"
        verbose_name_plural = "Credentials"
    def __unicode__(self):
        return self.id_user.name
    def __str__(self):
        return self.id_user.name

class MonthYearField(models.DateField):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.input_formats = ['%m/%Y']
        self.format = '%m/%Y'

class Payment(models.Model):

    id_pay = models.AutoField(primary_key=True)
    namecard = models.CharField(max_length=30, blank=False)
    numbercard = models.IntegerField(blank=False)
    exp_date = MonthYearField()
    id_user = models.ForeignKey(User, to_field="id_user", on_delete=models.CASCADE)
    class Meta:
        db_table = "payment"
        verbose_name = "Payment"
        verbose_name_plural = "Payments"
    def __unicode__(self):
        return self.namecard
    def __str__(self):
        return self.namecard

#class Delivery(models.Model):
#
#    id_del = models.AutoField(primary_key=True)
#    status = 

class Contact(models.Model):

    id_cont = models.AutoField(primary_key=True)
    email_cont = models.CharField(max_length=100, blank=False)
    name = models.CharField(max_length=100, blank=False)
    messege = models.TextField(max_length=1500, blank=False)
    class Meta:
        db_table = "contact"
        verbose_name = "Payment"
        verbose_name_plural = "Payments"
    def __unicode__(self):
        return self.email_cont
    def __str__(self):
        return self.email_cont
    
class Autor(models.Model):

    id_aut = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False)
    class Meta:
        db_table = "autor"
        verbose_name = "Autor"
        verbose_name_plural = "Autores"
    def __unicode__(self):
        return self.name
    def __str__(self):
        return self.name

class Publisher(models.Model):

    id_pub = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False)
    class Meta:
        db_table = "publisher"
        verbose_name = "Publisher"
        verbose_name_plural = "Publishers"
    def __unicode__(self):
        return self.name
    def __str__(self):
        return self.name

class Genre(models.Model):

    id_gen = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False)
    class Meta:
        db_table = "genre"
        verbose_name = "Genre"
        verbose_name_plural = "Genres"
    def __unicode__(self):
        return self.name
    def __str__(self):
        return self.name

class Book(models.Model):

    id_book = models.AutoField(primary_key=True)
    isbn = models.IntegerField(blank=True)
    title = models.CharField(max_length=100, blank=False)
    pages = models.IntegerField(blank=True)
    releaseyear = models.IntegerField(blank=True)
    bookcover = models.URLField(blank=True)
    stock = models.IntegerField(blank=False)
    synopsis = models.TextField(max_length=2000, blank=False)
    price = models.DecimalField(default=1, decimal_places=2, max_digits=10, blank=False)
    id_aut = models.ForeignKey(Autor, to_field="id_aut", on_delete=models.CASCADE)
    id_pub = models.ForeignKey(Publisher, to_field="id_pub", on_delete=models.CASCADE)
    class Meta:
        db_table = "book"
        verbose_name = "Book"
        verbose_name_plural = "Books"
    def __unicode__(self):
        return self.title
    def __str__(self):
        return self.title

class BookGenre(models.Model):

    id_bg = models.AutoField(primary_key=True)
    id_book = models.ForeignKey(Book, to_field="id_book", on_delete=models.CASCADE)
    id_gen = models.ForeignKey(Genre, to_field="id_gen", on_delete=models.CASCADE)

    class Meta:
        db_table = "book_genre"
        verbose_name = "GenreOfBook"
        verbose_name_plural = "GenresOfBooks"
    def __unicode__(self):
        return self.id_book.title +" "+ self.id_gen.name
    def __str__self(self):
        return "El libro "+ self.id_book.title +" es del genero "+ self.id_gen.name

class Sale(models.Model):

    id_sal = models.AutoField(primary_key=True)
    sale_date = models.DateField(auto_now=True)
    delivery_type = models.BooleanField(default=False)
    payment_type = models.BooleanField(default=False)
    total_quantity = models.IntegerField(default=0)
    total_cost = models.DecimalField(default=0, decimal_places=2, max_digits=10)
    id_user = models.ForeignKey(User, to_field="id_user", on_delete=models.CASCADE)
    class Meta:
        db_table = "sale"
        verbose_name = "Sale"
        verbose_name_plural = "Sales"
    def __unicode__(self):
        return "Numero de venta: "+ self.id_sal
    def __str__(self):
        return "Numero de venta: "+ self.id_sal

class Products(models.Model):

    id_pro = models.AutoField(primary_key=True)
    id_book = models.ForeignKey(Book, to_field="id_book", on_delete=models.CASCADE)
    id_sal = models.ForeignKey(Sale, to_field="id_sal", on_delete=models.CASCADE)
    amount = models.IntegerField()
    class Meta:
        db_table = "products"
        verbose_name = "Products"
        verbose_name_plural = "Products"
    def __unicode__(self):
        return self.id_pro
    def __str__(self):
        return self.id_pro