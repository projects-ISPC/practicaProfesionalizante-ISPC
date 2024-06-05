package com.proyectoispc.libreria;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.proyectoispc.libreria.db.DbBook;
import com.proyectoispc.libreria.models.Book;

public class Catalogue extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_catalogue);

        // Initialize and assign variable
        BottomNavigationView bottomNavigationView=findViewById(R.id.nav_view);
        LinearLayout content_catalogue = findViewById(R.id.content_catalogue);

        // Set Home selected
        bottomNavigationView.setSelectedItemId(R.id.catalogue);

        ImageButton imagenFlecha = findViewById(R.id.backButton);
        ImageButton imagenCarrito = findViewById(R.id.shoppingCartButton);
        imagenFlecha.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });

        imagenCarrito.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), Carrito.class));
                overridePendingTransition(0,0);
            }
        });

        // Perform item selected listener
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
                    return true;
                }

                if(id == R.id.contact){
                    startActivity(new Intent(getApplicationContext(),Contact.class));
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
        DbBook dbBook = new DbBook(this);
        List<Book> bookList = dbBook.getListBooks();
        LayoutInflater inflater = LayoutInflater.from(this);

        for (Book book : bookList) {
            View itemView = inflater.inflate(R.layout.item_book, content_catalogue, false);
            TextView bookTitle = itemView.findViewById(R.id.bookTitle);
            TextView bookAuthor = itemView.findViewById(R.id.bookAuthor);
            ImageView bookImage = itemView.findViewById(R.id.bookImage);

            bookTitle.setText(book.getName());
            bookAuthor.setText(book.getAuthor());
            int idDeRecurso = getResources().getIdentifier(book.getCover(), "drawable", getPackageName());
            bookImage.setImageResource(idDeRecurso);

            content_catalogue.addView(itemView);
        }


    }

    public void book_detail(View view) {
        Intent intent = new Intent(this, BookDetail.class);
        startActivity(intent);
    }
}