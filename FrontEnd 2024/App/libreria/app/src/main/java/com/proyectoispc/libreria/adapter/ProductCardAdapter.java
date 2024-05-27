package com.proyectoispc.libreria.adapter;

import android.app.Activity;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.proyectoispc.libreria.R;
import com.proyectoispc.libreria.models.Book;
import com.proyectoispc.libreria.models.SelectedBook;

import java.util.List;
public class ProductCardAdapter extends RecyclerView.Adapter<ProductCardAdapter.ViewHolder>
 {
    private List<SelectedBook> products;
    private Activity activity;

    public ProductCardAdapter(Activity activity, List<SelectedBook> products) {
        this.activity = activity;
        this.products = products;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_card, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        SelectedBook product = products.get(position);


        int img = product.getBook().getCoverID();
        String name = product.getBook().getName();
        String author = product.getBook().getAuthor();
        int cuantity = product.getCuantity();
        double price = product.getBook().getPrice();

        holder.cardImageProduct.setImageResource(img);
        holder.cardBookName.setText(name);
        holder.cardBookAuthor.setText(author);
        holder.cardTotalCuantity.setText(String.valueOf(cuantity));
        holder.cardBookPrice.setText("$ " + price);

        //
        // Agregar funcionalidad a los ImageView
        holder.agregarButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Obtener la posición del producto
                int position = holder.getAdapterPosition();
                if (position != RecyclerView.NO_POSITION) {
                    SelectedBook selectedBook = products.get(position);

                    // Agregar una unidad al producto en el carrito
                    selectedBook.incrementQuantity();

                    // Actualizar la interfaz de usuario para reflejar el cambio en la cantidad
                    holder.cardTotalCuantity.setText(String.valueOf(selectedBook.getCuantity()));

                    // Actualizar el total del carrito
                    double newTotal = selectedBook.getBook().getPrice() * selectedBook.getCuantity();
                    // Aquí puedes actualizar el total en la interfaz de usuario si es necesario
                }
            }
        });
        holder.quitarButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int position = holder.getAdapterPosition();
                if (position != RecyclerView.NO_POSITION) {
                    SelectedBook selectedBook = products.get(position);
                    int currentQuantity = selectedBook.getCuantity();
                    if (currentQuantity > 1) {
                        selectedBook.setCuantity(currentQuantity - 1);
                        holder.cardTotalCuantity.setText(String.valueOf(selectedBook.getCuantity()));
                        // Aquí puedes realizar cualquier otra operación necesaria, como actualizar el total del carrito.
                    }
                }
            }
        });
        holder.eliminarButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int position = holder.getAdapterPosition();
                if (position != RecyclerView.NO_POSITION) {
                    products.remove(position);
                    notifyItemRemoved(position);
                    // Aquí puedes realizar cualquier otra operación necesaria, como actualizar el total del carrito.
                }
            }
        });


    }


    @Override
    public int getItemCount() {
        return products.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        public TextView cardBookName;
        public TextView cardBookAuthor;
        public TextView cardBookPrice;
        public TextView cardTotalCuantity;
        public ImageView cardImageProduct;

        //
        public ImageView agregarButton;
        public ImageView quitarButton;
        public ImageView eliminarButton;

        public ViewHolder(View view) {
            super(view);
            cardBookName = view.findViewById(R.id.cardBookName);
            cardBookAuthor = view.findViewById(R.id.cardBookAuthor);
            cardBookPrice = view.findViewById(R.id.cardBookPrice);
            cardImageProduct = view.findViewById(R.id.cardImageProduct);
            cardTotalCuantity = view.findViewById(R.id.cardTotalCuantity);

            agregarButton = view.findViewById(R.id.agregar1);
            quitarButton = view.findViewById(R.id.quitar1);
            eliminarButton = view.findViewById(R.id.eliminar1);
        }
    }
}