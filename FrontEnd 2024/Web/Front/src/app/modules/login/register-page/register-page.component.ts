import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { regExEmail, regExPassword } from 'src/app/utils/regex/regex';

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

  showConfirmationMessage = false;
  errorMessage: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {}

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
      const { name, lastname, email, psw } = this.registerForm.value;
      const userBackendUrl = 'http://127.0.0.1:8000/api/register/';

      this.http.post(userBackendUrl, { name, lastname, email, psw, id_rol: 2 })
        .pipe(
          catchError(error => {
            console.log('Error al registrar usuario', error);
            if (error.status === 400 && error.error.email) {
              this.errorMessage = 'Ya existe un usuario con este email.';
            } else {
              this.errorMessage = 'Un error ha sucedido, intente de nuevo';
            }
            return throwError(error);
          })
        )
        .subscribe(() => {
          console.log('Registro exitoso');
          this.showConfirmationMessage = true;
          this.registerForm.reset(); // Vaciar los campos del formulario
        });
    }
  }

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

  onEmailInput() {
    this.errorMessage = '';
  }

  onClickClose() {
    this.activeModal.close();
  }

  onClickEnterLogin() {
    const modalRef = this.modalService.open(LoginPageComponent, { fullscreen: true, ariaLabelledBy: 'Modal de Login', ariaDescribedBy: 'Modal de Login'});
    this.activeModal.close();
  }
}
