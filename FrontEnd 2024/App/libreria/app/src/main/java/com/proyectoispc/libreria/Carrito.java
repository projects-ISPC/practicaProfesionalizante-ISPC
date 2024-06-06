package com.proyectoispc.libreria;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.proyectoispc.libreria.adapter.ProductAdapter;
import com.proyectoispc.libreria.adapter.ProductCardAdapter;
import com.proyectoispc.libreria.db.DbBook;
import com.proyectoispc.libreria.db.DbHelper;
import com.proyectoispc.libreria.models.Book;
import com.proyectoispc.libreria.models.SelectedBook;
import com.proyectoispc.libreria.service.ShoppingCartService;

import java.util.List;

public class Carrito extends BaseActivity {

    private ShoppingCartService shoppingCartService;
    double totalAmount;
    private RecyclerView recyclerView;
    private TextView totalAmountText;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_carrito);

        shoppingCartService = ShoppingCartService.getInstance();
        recyclerView = findViewById(R.id.selectedBooksCard);
        totalAmountText = findViewById(R.id.totalCompra);

        actualizarTotalAmount();


        ImageView flechaAtras = findViewById(R.id.backButton);
        flechaAtras.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });

        BottomNavigationView bottomNavigationView=findViewById(R.id.nav_view);
        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                int id = item.getItemId();

                if(id == R.id.home){
                    startActivity(new Intent(getApplicationContext(),Home.class));
                    overridePendingTransition(0,0);
                    return true;
                }

                if(id == R.id.catalogue){
                    startActivity(new Intent(getApplicationContext(),Catalogue.class));
                    overridePendingTransition(0,0);
                    return true;
                }

                if(id == R.id.contact){
                    startActivity(new Intent(getApplicationContext(), Contact.class));
                    overridePendingTransition(0,0);
                    return true;
                }

                if(id == R.id.profile){
                    startActivity(new Intent(getApplicationContext(),Profile.class));
                    overridePendingTransition(0,0);
                    return true;
                }

                if(id == R.id.about){
                    startActivity(new Intent(getApplicationContext(), AboutUs.class));
                    overridePendingTransition(0,0);
                    return true;
                }

                return false;
            }
        });
        // Configuración del RecyclerView
        List<SelectedBook> selectedBooks = shoppingCartService.getBooks();
        ProductCardAdapter adapter = new ProductCardAdapter(this, selectedBooks);
        adapter.setOnQuantityChangeListener(new ProductCardAdapter.OnQuantityChangeListener() {
            @Override
            public void onQuantityChanged() {
                actualizarTotalAmount();
            }
        });
        recyclerView.setAdapter(adapter);
    }

    public void iniciarCompra(View view) {
        Intent intent = new Intent(this, Checkout.class);
        startActivity(intent);
    }

    //
    // Método para agregar una unidad de un libro al carrito
    public void agregarUnidad(View view) {
        int bookId = shoppingCartService.getBookId(); // Implementa la lógica para obtener el ID del libro desde la vista
        Book bookToAdd = obtenerLibroSegunId(bookId);
        shoppingCartService.addBook(bookToAdd);
        actualizarCantidadEnInterfaz();
        //actualizarTotalAmount();
    }

    // Método para quitar una unidad de un libro del carrito
    public void quitarUnidad(View view) {
        int bookId = shoppingCartService.getBookId();
        Book bookToRemove = obtenerLibroSegunId(bookId);
        shoppingCartService.removeBook(bookToRemove);
        actualizarCantidadEnInterfaz();
        //actualizarTotalAmount();
    }

    // Método para eliminar un producto del carrito
    public void eliminarProducto(View view) {
        int bookId = shoppingCartService.getBookId();
        Book bookToDelete = obtenerLibroSegunId(bookId);
        shoppingCartService.removeBook(bookToDelete);
        actualizarCantidadEnInterfaz();
        //actualizarTotalAmount();
    }

    private void actualizarTotalAmount() {
        totalAmount = shoppingCartService.getTotalAmount();
        totalAmountText.setText(String.valueOf(totalAmount));
    }

    private void actualizarCantidadEnInterfaz() {
        actualizarTotalAmount();

        // Actualizar el RecyclerView si es necesario
        List<SelectedBook> selectedBooks = shoppingCartService.getBooks();
        ProductCardAdapter adapter = new ProductCardAdapter(this, selectedBooks);
        recyclerView.setAdapter(adapter);
    }

    private Book obtenerLibroSegunId(int bookId) {
        DbHelper dbHelper = DbHelper.getInstance(Carrito.this);
        return dbHelper.queryBookById(bookId);
    }

}