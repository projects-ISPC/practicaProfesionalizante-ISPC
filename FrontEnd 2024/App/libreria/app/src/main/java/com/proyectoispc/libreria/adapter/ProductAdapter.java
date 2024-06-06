package com.proyectoispc.libreria.adapter;

import android.app.Activity;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.proyectoispc.libreria.BookDetail;
import com.proyectoispc.libreria.R;
import com.proyectoispc.libreria.models.Book;

import java.util.List;

public class ProductAdapter extends RecyclerView.Adapter<ProductAdapter.ViewHolder> {
    private List<Book> books;
    private Activity activity;

    public ProductAdapter(Activity activity, List<Book> books) {
        this.activity = activity;
        this.books = books;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_product, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Book book = books.get(position);

        String img = book.getCover();
        int resourceId = holder.itemView.getResources().getIdentifier(img, "drawable", holder.itemView.getContext().getPackageName());

        holder.imageViewProduct.setImageResource(resourceId);

        holder.nameTextView.setText(book.getName());
        holder.authorTextView.setText(book.getAuthor());
        holder.priceTextView.setText("$" + String.valueOf(book.getPrice()));

        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Book selectedBook = books.get(holder.getAdapterPosition());

                Intent intent = new Intent(activity, BookDetail.class);
                intent.putExtra("id", selectedBook.getId());
                intent.putExtra("name", selectedBook.getName());
                intent.putExtra("author", selectedBook.getAuthor());
                intent.putExtra("description", selectedBook.getDescription());
                intent.putExtra("cover", resourceId);
                intent.putExtra("price", selectedBook.getPrice());
                activity.startActivity(intent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return books.size();
    }

    public void updateList(List<Book> newBooks) {
        books = newBooks;
        notifyDataSetChanged();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        public TextView nameTextView;
        public TextView authorTextView;
        public TextView priceTextView;
        public ImageView imageViewProduct;

        public ViewHolder(View view) {
            super(view);
            nameTextView = view.findViewById(R.id.textViewBookName);
            authorTextView = view.findViewById(R.id.textViewBookAuthor);
            priceTextView = view.findViewById(R.id.textViewBookPrice);
            imageViewProduct = view.findViewById(R.id.imageViewProduct);
        }
    }
}
