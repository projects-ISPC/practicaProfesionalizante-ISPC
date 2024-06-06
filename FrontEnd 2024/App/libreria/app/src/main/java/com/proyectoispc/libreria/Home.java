package com.proyectoispc.libreria;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.app.AppCompatDelegate;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageButton;
import android.widget.Switch;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.proyectoispc.libreria.adapter.ProductAdapter;
import com.proyectoispc.libreria.db.DbBook;
import com.proyectoispc.libreria.models.Book;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Home extends BaseActivity {

    DbBook dbBook;
    ImageButton backbutton, shoppingCartButton;
    Switch themeSwitch;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        dbBook = new DbBook(this);

        backbutton = findViewById(R.id.backButton);
        shoppingCartButton = findViewById(R.id.shoppingCartButton);
        themeSwitch = findViewById(R.id.themeSwitch);

        // Set the switch based on the current theme
        SharedPreferences sharedPreferences = getSharedPreferences("sharedPrefs", MODE_PRIVATE);
        final SharedPreferences.Editor editor = sharedPreferences.edit();
        final boolean isDarkModeOn = sharedPreferences.getBoolean("isDarkModeOn", false);

        themeSwitch.setChecked(isDarkModeOn);

        themeSwitch.setOnCheckedChangeListener((buttonView, isChecked) -> {
            if (isChecked) {
                AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES);
                editor.putBoolean("isDarkModeOn", true);
            } else {
                AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);
                editor.putBoolean("isDarkModeOn", false);
            }
            editor.apply();
        });

        RecyclerView recyclerView = findViewById(R.id.recomendedBooks);
        List<Book> recomendedBooks = getRecomendedBooks();
        ProductAdapter adapter = new ProductAdapter(this, recomendedBooks);
        recyclerView.setAdapter(adapter);

        // Load theme preference
        SharedPreferences sharedPreferencesTheme = getSharedPreferences("ThemePrefs", MODE_PRIVATE);
        boolean isDarkMode = sharedPreferencesTheme.getBoolean("isDarkMode", false);
        themeSwitch.setChecked(isDarkMode);

        // Set theme based on preference
        if (isDarkMode) {
            AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES);
        } else {
            AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);
        }

        // Listener for theme switch
        themeSwitch.setOnCheckedChangeListener((buttonView, isChecked) -> {
            if (isChecked) {
                AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES);
            } else {
                AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);
            }
            // Save theme preference
            SharedPreferences.Editor editorTheme = sharedPreferencesTheme.edit();
            editorTheme.putBoolean("isDarkMode", isChecked);
            editorTheme.apply();
        });

        // Initialize and assign variable
        BottomNavigationView bottomNavigationView = findViewById(R.id.nav_view);

        // Set Home selected
        bottomNavigationView.setSelectedItemId(R.id.home);

        // Perform item selected listener
        bottomNavigationView.setOnNavigationItemSelectedListener(item -> {
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
        });

        backbutton.setOnClickListener(view -> onBackPressed());
        shoppingCartButton.setOnClickListener(view -> {
            startActivity(new Intent(getApplicationContext(), Carrito.class));
            overridePendingTransition(0, 0);
        });
    }

    public void onClickBook() {
        startActivity(new Intent(getApplicationContext(), BookDetail.class));
        overridePendingTransition(0, 0);
    }

    public List<Book> getRecomendedBooks() {
        List<Book> recomendedBooks = new ArrayList<>();

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
            recomendedBooks.add(book);
        }

        recomendedBooks = recomendedBooks.stream()
                .filter(book -> "recomended".equals(book.getTag()))
                .collect(Collectors.toList());

        return recomendedBooks;
    }
}
