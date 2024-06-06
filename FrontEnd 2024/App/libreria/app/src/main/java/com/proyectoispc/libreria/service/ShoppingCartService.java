package com.proyectoispc.libreria.service;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;

import androidx.annotation.Nullable;

import com.proyectoispc.libreria.models.Book;
import com.proyectoispc.libreria.models.SelectedBook;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ShoppingCartService {
    private List<SelectedBook> selectedBooks = new ArrayList<>();
    private static ShoppingCartService shoppingCartService = null;

    static public ShoppingCartService getInstance() {
        if (shoppingCartService != null) {
            return shoppingCartService;
        }
        shoppingCartService = new ShoppingCartService();
        return shoppingCartService;
    }

    public void addBook(Book book) {
        for (SelectedBook element : selectedBooks) {
            if (element.getBook().getId() == book.getId()) {
                element.setCuantity(element.getCuantity() + 1);
                return;
            }
        }
        SelectedBook newBook = new SelectedBook(book, 1);
        this.selectedBooks.add(newBook);
    }

    //
    // Eliminar un Libro del Carrito
    public void removeBook(Book book) {
        Iterator<SelectedBook> iterator = selectedBooks.iterator();
        while (iterator.hasNext()) {
            SelectedBook element = iterator.next();
            if (element.getBook().getId() == book.getId()) {
                if (element.getCuantity() > 1) {
                    element.setCuantity(element.getCuantity() - 1);
                } else {
                    iterator.remove();
                }
                return;
            }
        }
    }
    // Actualizar Cantidad de un Libro
    public void updateBookQuantity(Book book, int quantity) {
        for (SelectedBook element : selectedBooks) {
            if (element.getBook().getId() == book.getId()) {
                element.setCuantity(quantity);
                return;
            }
        }
    }
    //


    public List<SelectedBook> getBooks() {
        return this.selectedBooks;
    }

    public double getTotalAmount() {
        double total = 0;
        for (SelectedBook element: this.selectedBooks) {
            total += (element.getBook().getPrice() * element.getCuantity());
        }
        return total;
    }

    public int getTotalQuantity() {
        int total = 0;
        for (SelectedBook element: this.selectedBooks) {
            total +=  element.getCuantity();
        }
        return total;
    }

    public int getBookId() {
        return this.selectedBooks.get(0).getBook().getId();
    }

    public void clearCart() {
        selectedBooks.clear();
    }


}
