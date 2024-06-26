import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Credentials } from 'src/app/models/credentials/credentials-model';
import { tap, catchError } from 'rxjs/operators';
import { regExEmail, regExPassword } from 'src/app/utils/regex/regex';
import { TranslateService } from '@ngx-translate/core';

interface ErrorMessages {
  email: { type: string, message: string }[],
  password: { type: string, message: string }[],
  login: { valid: boolean, message: string }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  errorMessages: ErrorMessages = {
    email: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 80 caracteres.' },
      { type: 'pattern', message: 'Ingresa un email válido.' }
    ],
    password: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'pattern', message: 'Debe contener al menos una letra mayúscula o minúscula, al menos un dígito y tener una longitud mínima de 8 caracteres' }
    ],
    login: { valid: true, message: 'Ha ingresado credenciales incorrectas. Inténtelo nuevamente.' }
  };

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.loadErrorMessages();
    this.createForm();
  }

  loadErrorMessages() {
    this.translate.get('mensajes_de_errores').subscribe((messages: any) => {
      this.errorMessages = {
        email: [
          { type: 'required', message: 'Campo requerido.' },
          { type: 'maxlength', message: messages.error_80_caracteres },
          { type: 'pattern', message: messages.error_ingreso_email_valido }
        ],
        password: [
          { type: 'required', message: 'Campo requerido.' },
          { type: 'pattern', message: messages.error_mas_errores }
        ],
        login: { valid: true, message: messages.error_credenciales }
      };
    });
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(80), Validators.pattern(regExEmail)]],
      password: ['', [Validators.required, Validators.pattern(regExPassword)]],
    });
  }

  loginUser() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      console.log('login valido');
      const credentials = this.getCredencials();
      this.authService.loginUser(credentials)
        .pipe(
          tap(response => {
            console.log('Usuario logueado', response);
            this.authService.updateProfileListener(response);
            this.onClickLogIn();
          }),
          catchError(error => {
            console.log('Error al ingresar', error);
            this.errorMessages.login.valid = false;
            throw error;
          })
        )
        .subscribe();
    }
  }

  getCredencials(): Credentials {
    return {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onClickLogIn() {
    this.activeModal.close();
  }

  onClickClose() {
    this.activeModal.close();
  }

  onClickEnterRegister() {
    const modalRef = this.modalService.open(RegisterPageComponent, { fullscreen: true, ariaDescribedBy: 'Modal de registro', ariaLabelledBy: 'Modal de registro'});
    this.activeModal.close();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
