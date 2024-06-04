package com.proyectoispc.libreria;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.Toast;
import android.widget.RadioButton;
import android.widget.RadioGroup;

import com.google.android.material.bottomnavigation.BottomNavigationView;

public class Checkout extends AppCompatActivity {

    Button goToPurchase;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_checkout);
        // Initialize and assign variable
        BottomNavigationView bottomNavigationView=findViewById(R.id.nav_view);

        // Set catalogue selected
        bottomNavigationView.setSelectedItemId(R.id.catalogue);

        ImageButton imagenFlecha = findViewById(R.id.backButton);
        ImageButton imagenCarrito = findViewById(R.id.shoppingCartButton);
        Button botonVolver = findViewById(R.id.botonVolver);
        RadioGroup radioGroupEnvio = findViewById(R.id.radioGroupEnvio);
        RadioButton radioButtonRetiroLocal = findViewById(R.id.radioButtonRetiroLocal);
        RadioButton radioButtonEnvioDomicilio = findViewById(R.id.radioButtonEnvioDomicilio);
        EditText editTextText = findViewById(R.id.editTextText);
        EditText editTextText2 = findViewById(R.id.editTextText2);
        EditText editTextText3 = findViewById(R.id.editTextText3);
        EditText editTextText4 = findViewById(R.id.editTextText4);
        EditText editTextText5 = findViewById(R.id.editTextText5);
        EditText editTextText6 = findViewById(R.id.editTextText6);
        EditText editTextText7 = findViewById(R.id.editTextText7);
        EditText editTextText8 = findViewById(R.id.editTextText8);
        Button botonPagar = findViewById(R.id.botonPagar);

        botonVolver.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        imagenFlecha.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });

        imagenCarrito.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), Carrito.class));
                overridePendingTransition(0,0);
            }
        });

        // Perform item selected listener
        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                int id = item.getItemId();

                if(id == R.id.home){
                    startActivity(new Intent(getApplicationContext(),Home.class));
                    overridePendingTransition(0,0);
                    return true;
                }

                if(id == R.id.catalogue){
                    startActivity(new Intent(getApplicationContext(),Catalogue.class));
                    overridePendingTransition(0,0);
                    return true;
                }

                if(id == R.id.contact){
                    startActivity(new Intent(getApplicationContext(),Contact.class));
                    overridePendingTransition(0,0);
                    return true;
                }

                if(id == R.id.profile){
                    startActivity(new Intent(getApplicationContext(),Profile.class));
                    overridePendingTransition(0,0);
                    return true;
                }

                if(id == R.id.about){
                    startActivity(new Intent(getApplicationContext(), AboutUs.class));
                    overridePendingTransition(0,0);
                    return true;
                }

                return false;
            }
        });

        radioButtonEnvioDomicilio.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(){
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked) {
                    editTextText5.setVisibility(View.VISIBLE);
                    editTextText6.setVisibility(View.VISIBLE);
                    editTextText7.setVisibility(View.VISIBLE);
                    editTextText8.setVisibility(View.VISIBLE);
                    enableForm(true);
                } else {
                    editTextText5.setVisibility(View.INVISIBLE);
                    editTextText6.setVisibility(View.INVISIBLE);
                    editTextText7.setVisibility(View.INVISIBLE);
                    editTextText8.setVisibility(View.INVISIBLE);
                    enableForm(false);
                }
            }
        });

        // Método de validación de datos
        botonPagar.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){

                // Verificar que se haya seleccionado algún método de envío
                if (!radioButtonEnvioDomicilio.isChecked() && !radioButtonRetiroLocal.isChecked()) {
                    Toast.makeText(Checkout.this, "Debe seleccionar al menos una opción de envío.", Toast.LENGTH_SHORT).show();
                    return;
                }

                // Validar campos obligatorios de envío
                if (radioButtonEnvioDomicilio.isChecked()) {
                    String editTextText5Str = editTextText5.getText().toString().trim();
                    String editTextText6Str = editTextText6.getText().toString().trim();
                    String editTextText7Str = editTextText7.getText().toString().trim();
                    String editTextText8Str = editTextText8.getText().toString().trim();

                    if (editTextText5Str.isEmpty() || editTextText6Str.isEmpty() || editTextText7Str.isEmpty() || editTextText8Str.isEmpty()) {
                        Toast.makeText(Checkout.this, "Todos los campos son requeridos para el envío a domicilio.", Toast.LENGTH_SHORT).show();
                        return;
                    }
                    // Validaciones adicionales

                    // Validar calle y número
                    String calleNumero = editTextText5.getText().toString().trim();
                    if (calleNumero.isEmpty()) {
                        editTextText5.setError("Campo requerido.");
                        return;
                    }

                    // Validar localidad
                    String localidad = editTextText6.getText().toString().trim();
                    if (localidad.isEmpty()) {
                        editTextText6.setError("Campo requerido.");
                        return;
                    }

                    // Validar provincia
                    String provincia = editTextText7.getText().toString().trim();
                    if (provincia.isEmpty()) {
                        editTextText7.setError("Campo requerido.");
                        return;
                    }

                    // Validar código postal
                    String codigoPostal = editTextText8.getText().toString().trim();
                    if (codigoPostal.isEmpty()) {
                        editTextText8.setError("Campo requerido.");
                        return;
                    } else if (!codigoPostal.matches("\\d{4}")) {
                        editTextText8.setError("Ingrese un código postal válido de 4 dígitos.");
                        return;
                    }
                }

                // Validar nombre completo
                String nombreCompleto = editTextText.getText().toString().trim();
                if (nombreCompleto.isEmpty()) {
                    editTextText.setError("Campo requerido.");
                    return;
                } else if (!nombreCompleto.matches("^[a-zA-Z]+( [a-zA-Z]+)*$")) {
                    editTextText.setError("El nombre debe contener solo letras y espacios.");
                    return;
                }

                // Validar correo electrónico
                String correoElectronico = editTextText2.getText().toString().trim();
                if (correoElectronico.isEmpty()) {
                    editTextText2.setError("Campo requerido.");
                    return;
                } else if (!android.util.Patterns.EMAIL_ADDRESS.matcher(correoElectronico).matches()) {
                    editTextText2.setError("Ingresa un email válido.");
                    return;
                }

                // Validar código de área
                String codigoArea = editTextText3.getText().toString().trim();
                if (codigoArea.isEmpty()) {
                    editTextText3.setError("Campo requerido.");
                    return;
                } else if (codigoArea.length() < 2 || codigoArea.length() > 4) {
                    editTextText3.setError("Ingresa un código de área válido de 2 a 4 dígitos.");
                    return;
                }

                // Validar número de teléfono
                String numeroTelefono = editTextText4.getText().toString().trim();
                if (numeroTelefono.isEmpty()) {
                    editTextText4.setError("Campo requerido.");
                    return;
                } else if (!numeroTelefono.matches("\\d+")) {
                    editTextText4.setError("Ingresa solo números.");
                    return;
                } else if (numeroTelefono.length() < 6 || numeroTelefono.length() > 8) {
                    editTextText4.setError("Ingresa un número de teléfono válido de 6 a 8 dígitos.");
                    return;
                }

                startActivity(new Intent(getApplicationContext(), CheckboxVirtual.class));
                overridePendingTransition(0,0);

            }
        }
        );

    }

    // Método para habilitar o deshabilitar los campos del formulario
    private void enableForm(boolean enabled) {
        EditText editTextText5 = findViewById(R.id.editTextText5);
        EditText editTextText6 = findViewById(R.id.editTextText6);
        EditText editTextText7 = findViewById(R.id.editTextText7);
        EditText editTextText8 = findViewById(R.id.editTextText8);

        editTextText5.setEnabled(enabled);
        editTextText6.setEnabled(enabled);
        editTextText7.setEnabled(enabled);
        editTextText8.setEnabled(enabled);
    }

}