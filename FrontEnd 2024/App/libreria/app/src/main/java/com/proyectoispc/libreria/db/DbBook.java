package com.proyectoispc.libreria.db;

import android.content.ContentValues;
import android.content.Context;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;

public class DbBook  extends DbHelper {

    Context context;
    SharedPreferences sharedPreferences;

    public DbBook(@Nullable Context context) {
        super(context);
        this.context = context;
    }

    public Cursor getBooks() {
        SQLiteDatabase db = this.getReadableDatabase(); // Usar getReadableDatabase() en lugar de getWritableDatabase()
        Cursor cursor = db.rawQuery("select * from t_book", null);
        return cursor;
    }

    //
    public Cursor getTheBookById(int bookId) {
        SQLiteDatabase db = this.getReadableDatabase();
        String[] columns = {"_id", "title", "author", "price"}; // Suponiendo que estas son las columnas de tu tabla t_book
        String selection = "_id=?";
        String[] selectionArgs = {String.valueOf(bookId)};
        return db.query("t_book", columns, selection, selectionArgs, null, null, null);
    }

}