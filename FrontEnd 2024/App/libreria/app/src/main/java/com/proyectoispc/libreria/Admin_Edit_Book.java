package com.proyectoispc.libreria;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import com.proyectoispc.libreria.db.DbBook;
import com.proyectoispc.libreria.models.Book;

public class Admin_Edit_Book extends AppCompatActivity {
    ImageButton backButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_edit_book);

        //Comiendo del Boton Back
        backButton = findViewById(R.id.imageButton6);
        backButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onBackPressed();
            }
        });
        //Fin del boton back

        //Recibir el ID del Libro desde la Lista de libro editable
        int bookId = getIntent().getIntExtra("BOOK_ID", -1);
        if (bookId == -1) {
            // Mostrar un mensaje de error y cerrar la actividad
            Toast.makeText(this, "Error: No se pudo obtener el ID del libro", Toast.LENGTH_SHORT).show();
            finish(); // Cerrar la actividad
            return;
        }else {
            DbBook dbBook = new DbBook(this);
            Book book = dbBook.getBookForId(bookId);
            if(book != null) {
                this.getBookDetailForEdit(book);
            }else{
                Toast.makeText(this, "Error: No existe el Libro", Toast.LENGTH_SHORT).show();
                finish(); // Cerrar la actividad
                return;
            }
        }
    }

    private void getBookDetailForEdit(Book book){
        TextView editTitleInput = findViewById(R.id.editTitle);
        TextView editAuthorInput = findViewById(R.id.editAuthor);
        TextView editPriceInput = findViewById(R.id.editPrice);
        TextView editSipnosysInput = findViewById(R.id.editSynopsis);

        editTitleInput.setText(book.getName());
        editAuthorInput.setText(book.getAuthor());
        editSipnosysInput.setText(book.getDescription());
        editPriceInput.setText(String.valueOf(book.getPrice()));
    };
}