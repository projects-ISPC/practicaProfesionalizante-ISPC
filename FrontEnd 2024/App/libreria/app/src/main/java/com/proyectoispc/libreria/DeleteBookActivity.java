package com.proyectoispc.libreria;

import android.database.Cursor;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
import com.proyectoispc.libreria.db.DbBook;

import java.util.Objects;


public class DeleteBookActivity extends BaseActivity {

    ImageButton backButton;
    Button deleteBookButton;
    TextInputEditText bookIdInputLayoutText;
    TextInputLayout bookIdInputLayout;

    TextView bookDetailsTextView;

    ImageButton lupaButton;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_delete_book);

        backButton = findViewById(R.id.backButton);
        deleteBookButton = findViewById(R.id.deleteBook);
        bookIdInputLayout = findViewById(R.id.bookIdInput);
        bookIdInputLayoutText = findViewById(R.id.bookIdInputEdit);
        bookDetailsTextView = findViewById(R.id.bookDetailsTextView);
        lupaButton = findViewById(R.id.lupaButton);

        deleteBookButton.setEnabled(false);

        backButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onBackPressed();
            }
        });

        deleteBookButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                deleteBook();
            }
        });

        lupaButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                findBookInDb();
            }
        });
    }

    private void findBookInDb() {
        DbBook dbBook = new DbBook(this);
        String bookId;
        try {
            bookId = Objects.requireNonNull(bookIdInputLayoutText.getText()).toString().trim();
        } catch (Exception e) {
            Toast.makeText(this, "Ingrese un id para buscarlo.", Toast.LENGTH_SHORT).show();
            return;
        }
        Cursor cursor = null;
        try {
            cursor = dbBook.getBookById(Integer.parseInt(bookId));
            if (cursor != null && cursor.moveToFirst()) {
                int titleIndex = cursor.getColumnIndex("name");
                int authorIndex = cursor.getColumnIndex("author");
                int synopsisIndex = cursor.getColumnIndex("description");
                int priceIndex = cursor.getColumnIndex("price");

                if (titleIndex != -1 && authorIndex != -1 && synopsisIndex != -1 && priceIndex != -1) {
                    String name = cursor.getString(titleIndex);
                    String author = cursor.getString(authorIndex);
                    String description = cursor.getString(synopsisIndex);
                    String price = cursor.getString(priceIndex);
                    bookDetailsTextView.setText(getString(R.string.book_details, name, author, description, price));
                    deleteBookButton.setEnabled(true);
                } else {
                    notFoundErrorToast();
                }
            } else {
                notFoundErrorToast();
            }
        } catch (Exception e) {
            notFoundErrorToast();
        } finally {
            if (cursor != null) cursor.close();
        }
    }

    private void notFoundErrorToast() {
        Toast.makeText(this, "No se encontró el libro, inténtalo con otro id.", Toast.LENGTH_SHORT).show();
        bookDetailsTextView.setText("");
        deleteBookButton.setEnabled(false);
    }

    private void deleteBook() {
        int result;
        DbBook dbBook = new DbBook(this);
        String bookId = Objects.requireNonNull(bookIdInputLayoutText.getText()).toString().trim();

        try {
            result = dbBook.deleteBook(Integer.parseInt(bookId));
        } catch (Exception e) {
            Toast.makeText(this, "No se pudo eliminar el libro. Inténtalo nuevamente.", Toast.LENGTH_SHORT).show();
            return;
        }

        if (result != 0) {
            Toast.makeText(this, "Se eliminó el libro correctamente.", Toast.LENGTH_SHORT).show();
            finish();
        } else {
            Toast.makeText(this, "No se pudo eliminar el libro. Inténtalo nuevamente.", Toast.LENGTH_SHORT).show();
        }
    }
}