import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { regExEmail, regExPassword } from 'src/app/utils/regex/regex';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessages: any = {};
  showConfirmationMessage = false;
  errorMessage: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.loadErrorMessages();
    this.createForm();
  }

  loadErrorMessages() {
    this.translate.get('mensajes_de_errores').subscribe((messages: any) => {
      this.errorMessages = {
        name: [
          { type: 'required', message: 'Campo requerido.' },
          { type: 'maxlength', message: messages.error_80_caracteres }
        ],
        lastname: [
          { type: 'required', message: 'Campo requerido.' },
          { type: 'maxlength', message: messages.error_80_caracteres }
        ],
        email: [
          { type: 'required', message: 'Campo requerido.' },
          { type: 'maxlength', message: messages.error_80_caracteres },
          { type: 'pattern', message: messages.error_ingreso_email_valido }
        ],
        psw: [
          { type: 'required', message: 'Campo requerido.' },
          { type: 'pattern', message: messages.error_mas_errores }
        ],
      };
    });
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
              this.translate.get('REGISTRO.duplicidad.email').subscribe((res: string) => {
                this.errorMessage = res;
              });
            } else {
              this.translate.get('REGISTRO.default_error').subscribe((res: string) => {
                this.errorMessage = res;
              });
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
    const modalRef = this.modalService.open(LoginPageComponent, { fullscreen: true });
    this.activeModal.close();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
