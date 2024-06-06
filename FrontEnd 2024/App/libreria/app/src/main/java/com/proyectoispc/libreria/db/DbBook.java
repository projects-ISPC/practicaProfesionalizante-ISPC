package com.proyectoispc.libreria.db;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import androidx.annotation.Nullable;

import com.proyectoispc.libreria.models.Book;

import java.util.ArrayList;
import java.util.List;

public class DbBook extends DbHelper {

    Context context;

    public DbBook(@Nullable Context context) {
        super(context);
        this.context = context;
    }

    public Cursor getBooks() {
        SQLiteDatabase db = this.getWritableDatabase();
        Cursor cursor = db.rawQuery("SELECT * FROM t_book", null);
        return cursor;
    }

    public Cursor getBooksForGenres(String genre) {
        SQLiteDatabase db = this.getWritableDatabase();
        Cursor cursor = db.rawQuery("SELECT * FROM t_book WHERE genre = ?", new String[]{genre});
        return cursor;
    }
  
    public List<Book> getListBooks() {
        SQLiteDatabase db = this.getWritableDatabase();
        List<Book> bookList = new ArrayList<>();
        Cursor cursor = db.rawQuery("SELECT id, name, author, description, cover, price, tag FROM t_book", null);

        if (cursor.moveToFirst()) {
            do {
                int idIndex = cursor.getColumnIndexOrThrow("id");
                int nameIndex = cursor.getColumnIndexOrThrow("name");
                int authorIndex = cursor.getColumnIndexOrThrow("author");
                int descriptionIndex = cursor.getColumnIndexOrThrow("description");
                int coverIndex = cursor.getColumnIndexOrThrow("cover");
                int priceIndex = cursor.getColumnIndexOrThrow("price");
                int tagIndex = cursor.getColumnIndexOrThrow("tag");
              
                Book book = new Book(
                        cursor.getInt(idIndex),
                        cursor.getString(nameIndex),
                        cursor.getString(authorIndex),
                        cursor.getString(descriptionIndex),
                        cursor.getString(coverIndex),
                        cursor.getDouble(priceIndex),
                        cursor.getString(tagIndex)
                );
                bookList.add(book);
            } while (cursor.moveToNext());
        }
        cursor.close();
        return bookList;
    }

    public Cursor getBookById(int id) {
        SQLiteDatabase db = this.getReadableDatabase();
        String selection = "id=?";
        String[] selectionArgs = { String.valueOf(id) };
        return db.query("t_book", null, selection, selectionArgs, null, null, null);
    }

    public long insertBook(String name, String author, String description, String cover, double price, String tag) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues values = new ContentValues();
        values.put("name", name);
        values.put("author", author);
        values.put("description", description);
        values.put("cover", cover);
        values.put("price", price);
        values.put("tag", tag);

        long result = db.insert("t_book", null, values);
        db.close();
        return result; // El ID del nuevo registro insertado, o -1 si ocurrió un error.
    }

    public int deleteBook(int id) {
        SQLiteDatabase db = this.getWritableDatabase();
        String whereClause = "id=?";
        String[] whereArgs = new String[] { String.valueOf(id) };
        int result = db.delete("t_book", whereClause, whereArgs);
        db.close();
        return result;
    }

    public boolean isBookInDatabase(int id) {
        SQLiteDatabase db = this.getReadableDatabase();
        String selection = "id=?";
        String[] selectionArgs = { String.valueOf(id) };
        Cursor cursor = db.query("t_book", null, selection, selectionArgs, null, null, null);
        boolean exists = (cursor != null && cursor.moveToFirst());
        if (cursor != null) cursor.close();
        return exists;
    }

}