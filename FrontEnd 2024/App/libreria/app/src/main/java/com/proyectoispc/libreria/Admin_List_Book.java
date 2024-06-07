package com.proyectoispc.libreria;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.proyectoispc.libreria.db.DbBook;
import com.proyectoispc.libreria.models.Book;

import java.util.List;

public class Admin_List_Book extends AppCompatActivity {
    ImageButton backButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_list_book);

        //Comiendo del Boton Back
        backButton = findViewById(R.id.imageButton6);
        backButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onBackPressed();
            }
        });
        //Fin del boton back

        LinearLayout content_edit_book = findViewById(R.id.content_list_edit_book);
        DbBook dbBook = new DbBook(this);
        List<Book> bookList = dbBook.getListBooks();
        LayoutInflater inflater = LayoutInflater.from(this);

        for (Book book : bookList) {
            View itemView = inflater.inflate(R.layout.item_card_book_edit, content_edit_book, false);
            TextView bookTitle = itemView.findViewById(R.id.editBookTitle);
            TextView bookAuthor = itemView.findViewById(R.id.editBookAuthor);
            ImageView bookImage = itemView.findViewById(R.id.editbookImage);
            TextView bookId = itemView.findViewById(R.id.editBookId);

            bookTitle.setText(book.getName());
            bookAuthor.setText(book.getAuthor());
            int idDeRecurso = getResources().getIdentifier(book.getCover(), "drawable", getPackageName());
            bookImage.setImageResource(idDeRecurso);
            bookId.setText(String.valueOf(book.getId()));

            content_edit_book.addView(itemView);
        }

    }
}