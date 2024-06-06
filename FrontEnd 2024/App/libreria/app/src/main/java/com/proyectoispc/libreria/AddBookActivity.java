package com.proyectoispc.libreria;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.textfield.TextInputEditText;
import com.proyectoispc.libreria.db.DbBook;

import com.google.android.material.textfield.TextInputEditText;
import com.proyectoispc.libreria.db.DbBook;
import com.proyectoispc.libreria.models.Book;

import java.util.List;

public class AddBookActivity extends BaseActivity {

    ImageButton backButton;
    Button addBookButton;
    TextInputEditText titleEditText, authorEditText, priceEditText, synopsisEditText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_add_book);

        backButton = findViewById(R.id.backButton);
        addBookButton = findViewById(R.id.addBook);
        titleEditText = findViewById(R.id.titleEditText);
        authorEditText = findViewById(R.id.authorEditText);
        priceEditText = findViewById(R.id.priceEditText);
        synopsisEditText = findViewById(R.id.synopsisEditText);

        backButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onBackPressed();
            }
        });

        addBookButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                addBook();
            }
        });
    }

    private void addBook() {
        String title = titleEditText.getText().toString().trim();
        String author = authorEditText.getText().toString().trim();
        String synopsis = synopsisEditText.getText().toString().trim();
        String cover = "img_book_default";
        double price = 0.0;
        try {
            price = Double.parseDouble(priceEditText.getText().toString().trim());
        } catch (NumberFormatException e) {
            Toast.makeText(this, "Por favor ingresa un precio valido!", Toast.LENGTH_SHORT).show();
            return;
        }

        DbBook dbBook = new DbBook(this);
        long result = dbBook.insertBook(title, author, synopsis, cover, price, "recomendado");

        if (result != -1) {
            Toast.makeText(this, "Se agrego el libro correctamente!", Toast.LENGTH_SHORT).show();
            finish(); // Close the activity
        } else {
            Toast.makeText(this, "No se pudo agregar el libro!", Toast.LENGTH_SHORT).show();
        }
    }

}


