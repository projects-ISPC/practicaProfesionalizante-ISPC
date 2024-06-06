package com.proyectoispc.libreria;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageButton;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.textfield.TextInputEditText;
import com.proyectoispc.libreria.adapter.ProductAdapter;
import com.proyectoispc.libreria.db.DbBook;
import com.proyectoispc.libreria.models.Book;

import java.util.ArrayList;
import java.util.List;

import android.text.Editable;
import android.text.TextWatcher;

public class Home extends BaseActivity {

    DbBook dbBook;
    ImageButton backbutton, shoppingCartButton;
    ProductAdapter adapter;
    List<Book> allBooks;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        dbBook = new DbBook(this);

        backbutton = findViewById(R.id.backButton);
        shoppingCartButton = findViewById(R.id.shoppingCartButton);

        RecyclerView recyclerView = findViewById(R.id.recomendedBooks);
        allBooks = getAllBooks(); // Obtiene todos los libros una vez
        adapter = new ProductAdapter(this, new ArrayList<>()); // Inicializa con una lista vacía
        recyclerView.setLayoutManager(new GridLayoutManager(this, 3)); // Asegúrate de configurar el LayoutManager
        recyclerView.setAdapter(adapter);

        TextInputEditText searchEditText = findViewById(R.id.textInputEditText);
        searchEditText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                // No action needed before text changed
            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                filterBooks(charSequence.toString());
            }

            @Override
            public void afterTextChanged(Editable editable) {
                // No action needed after text changed
            }
        });

        // Initialize and assign variable
        BottomNavigationView bottomNavigationView = findViewById(R.id.nav_view);

        // Set Home selected
        bottomNavigationView.setSelectedItemId(R.id.home);

        // Perform item selected listener
        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                int id = item.getItemId();

                if (id == R.id.home) {
                    return true;
                }

                if (id == R.id.catalogue) {
                    startActivity(new Intent(getApplicationContext(), Catalogue.class));
                    overridePendingTransition(0, 0);
                    return true;
                }

                if (id == R.id.contact) {
                    startActivity(new Intent(getApplicationContext(), Contact.class));
                    overridePendingTransition(0, 0);
                    return true;
                }

                if (id == R.id.profile) {
                    startActivity(new Intent(getApplicationContext(), Profile.class));
                    overridePendingTransition(0, 0);
                    return true;
                }

                if (id == R.id.about) {
                    startActivity(new Intent(getApplicationContext(), AboutUs.class));
                    overridePendingTransition(0, 0);
                    return true;
                }

                return false;
            }
        });

        backbutton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onBackPressed();
            }
        });
        shoppingCartButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), Carrito.class));
                overridePendingTransition(0, 0);
            }
        });
    }

    public void onClickBook() {
        startActivity(new Intent(getApplicationContext(), BookDetail.class));
        overridePendingTransition(0, 0);
    }

    public List<Book> getAllBooks() {
        List<Book> books = new ArrayList<>();

        Cursor booksData = dbBook.getBooks();

        while (booksData.moveToNext()) {
            int id = booksData.getInt(0);
            String name = booksData.getString(1);
            String author = booksData.getString(2);
            String description = booksData.getString(3);
            String cover = booksData.getString(4);
            double price = booksData.getDouble(5);
            String tag = booksData.getString(6);

            Book book = new Book(id, name, author, description, cover, price, tag);
            books.add(book);
        }

        return books;
    }

    private void filterBooks(String query) {
        List<Book> filteredBooks = new ArrayList<>();
        for (Book book : allBooks) {
            if (book.getName().toLowerCase().startsWith(query.toLowerCase())) {
                filteredBooks.add(book);
            }
        }
        adapter.updateList(filteredBooks);
    }
}
