import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Auth } from 'src/app/models/auth/auth-model';
import { CreateUserDTO } from 'src/app/models/user/user-model';
import { tap, catchError } from 'rxjs/operators';
import { regExEmail, regExOnlyNumbers, regExPassword } from 'src/app/utils/regex/regex';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessages = {
    name: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 80 caracteres.' }
    ],
    lastname: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 80 caracteres.' }
    ],
    email: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 80 caracteres.' },
      { type: 'pattern', message: 'Ingresa un email válido.' }
    ],
    psw: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'pattern', message: 'Debe contener al menos una letra mayúscula o minúscula, al menos un dígito y tener una longitud mínima de 8 caracteres' }
    ],
  };

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80)]],
      lastname: ['', [Validators.required, Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.maxLength(80), Validators.pattern(regExEmail)]],
      psw: ['', [Validators.required, Validators.pattern(regExPassword)]],
    });
  }

  registerUser() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      console.log('Formulario válido');

      const userData = this.registerForm.value;
      this.submitRegistro(userData);
    }
  }

  /* SUBMIT REGISTRO CREA USER Y LUEGO CREDENCIALES - AUN NO FUNCIONAN CRED */

  submitRegistro(userData: any) {
    const { name, lastname, email, psw } = userData;
    const userBackendUrl = 'http://127.0.0.1:8000/api/register/';
    const credentialBackendUrl = 'http://127.0.0.1:8000/api/credential/';
  
    // Primera solicitud POST para crear el usuario
    this.http.post(userBackendUrl, { name, lastname, id_rol: 2 })
      .pipe(
        switchMap((userResponse: any) => {
          console.log('Usuario registrado', userResponse);
          const userId = userResponse.id_user; // Obtener el id_user del usuario recién registrado
  
          // Segunda solicitud POST para crear las credenciales asociadas al usuario
          return this.http.post(credentialBackendUrl, { id_user: userId, email, psw });
        }),
        tap(credentialResponse => {
          console.log('Credenciales registradas', credentialResponse);
          this.onClickRegister();
        }),
        catchError(error => {
          console.log('Error al registrar credenciales', error);
          throw error;
        })
      )
      .subscribe();
  }

/* SUBMIT REGISTRO (SOLO TABLA USER)

  submitRegistro(userData: any) {

    const { name, lastname } = userData; // Extraer name y lastname del userData
    const id_rol = 2;
    const dataToSend = { name, lastname, id_rol }; // Crear un nuevo objeto con name, lastname, role 2 (user)
    const backendUrl = 'http://127.0.0.1:8000/api/register/';

    this.http.post(backendUrl, dataToSend)
      .pipe(
        tap(response => {
          console.log('Usuario registrado', response);
          this.onClickRegister();
        }),
        catchError(error => {
          console.log('Error al registrar', error);
          throw error;
        })
      )
      .subscribe();
  }

*/



/* Código del proyecto anterior:

  registerUser() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      console.log('valido');

      const userDto = this.getUserDto();
      this.userService.createUser(userDto)
        .pipe(
          tap(response => {
            console.log('Usuario registrado', response);
            this.onClickRegister();
          }),
          catchError(error => {
            console.log('Error al registrar', error);
            throw error;
          })
        )
        .subscribe();
    }

  }*/

  get name() {
    return this.registerForm.get('name');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

 get email() {
    return this.registerForm.get('email');
  }

  get psw() {
    return this.registerForm.get('psw');
  }

  /* Código del proyecto anterior:
  
  getUserDto(): CreateUserDTO {
    return {
      first_name: this.registerForm.value.name,
      last_name: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };
  }
*/

  onClickRegister() {
    this.activeModal.close();
  }

  onClickClose() {
    this.activeModal.close();
  }

  onClickEnterLogin() {
    const modalRef = this.modalService.open(LoginPageComponent, { fullscreen: true });
    this.activeModal.close();
  }
}