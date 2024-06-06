package com.proyectoispc.libreria;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class AdminDashboard extends BaseActivity {
    ImageButton backButton;
    Button addBookButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_dashboard);

        backButton = findViewById(R.id.imageButton6);
        addBookButton = findViewById(R.id.addBookButton);
        backButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onBackPressed();
            }
        });

        addBookButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                goToAddBook();
            }
        });
    }

    public void goToAddBook() {
        startActivity(new Intent(getApplicationContext(), AddBookActivity.class));
        overridePendingTransition(0,0);
    };
}
