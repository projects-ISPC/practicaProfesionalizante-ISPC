import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Auth } from 'src/app/models/auth/auth-model';
import { CreateUserDTO } from 'src/app/models/user/user-model';
import { tap, catchError } from 'rxjs/operators';
import { regExEmail, regExOnlyNumbers, regExPassword } from 'src/app/utils/regex/regex';
import { AuthService } from 'src/app/services/auth/auth.service';

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
    document: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'minlength', message: 'Mínimo 7 dígitos' },
      { type: 'maxlength', message: 'Máximo 8 dígitos.' },
      { type: 'pattern', message: 'Ingresa sólo números.' }
    ],
    areaCode: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'minlength', message: 'Mínimo 2 dígitos' },
      { type: 'maxlength', message: 'Máximo 4 dígitos.' },
      { type: 'pattern', message: 'Ingresa sólo números.' }
    ],
    telephone: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'minlength', message: 'Mínimo 6 dígitos' },
      { type: 'maxlength', message: 'Máximo 8 dígitos.' },
      { type: 'pattern', message: 'Ingresa sólo números.' }
    ],
    location: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 50 caracteres.' }
    ],
    province: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 50 caracteres.' }
    ],
    address: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 80 caracteres.' }
    ],
    postalCode: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'minlength', message: 'Mínimo 4 dígitos' },
      { type: 'maxlength', message: 'Máximo 4 dígitos.' },
      { type: 'pattern', message: 'Ingresa sólo números.' }
    ],
    email: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 80 caracteres.' },
      { type: 'pattern', message: 'Ingresa un email válido.' }
    ],
    password: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'pattern', message: 'Debe contener al menos una letra mayúscula o minúscula, al menos un dígito y tener una longitud mínima de 8 caracteres' }
    ],
  };

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
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
      password: ['', [Validators.required, Validators.pattern(regExPassword)]],
      areaCode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4), Validators.pattern(regExOnlyNumbers)]],
      telephone: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8), Validators.pattern(regExOnlyNumbers)]],
      document: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern(regExOnlyNumbers)]],
      location: ['', [Validators.required, Validators.maxLength(50)]],
      province: ['', [Validators.required, Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.maxLength(80)]],
      postalCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(regExOnlyNumbers)]]
    });
  }

  registerUser() {
  this.registerForm.markAllAsTouched();
  if (this.registerForm.valid) {
    console.log('Registration data is valid');
    const credentials = this.getRegistrationCredentials();
    this.authService.registerUser(credentials) // Assuming this is the correct method to call for registration
      .pipe(
        tap(response => {
          console.log('User registered', response);
          this.authService.updateProfileListener(response); // Assuming you want to update some user profile observable
          this.onClickClose(); // Assuming this is to close the modal on successful registration
        }),
        catchError(error => {
          console.error('Error during registration', error);
          throw error;
        })
      )
      .subscribe();
  }
}

  getRegistrationCredentials(): any {
    // Extract data from the registerForm and return the credentials object
    return {
      name: this.registerForm.value.name,
      lastname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      // Other fields as needed
    };
  }
  // registerUser(event: Event){
  //   event.preventDefault;

  //   if(this.registerForm.valid){
  //     console.log('valido');

  //   } else{

  //     this.registerForm.markAllAsTouched
  //   }
  // }

  get name() {
    return this.registerForm.get('name');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

  get document() {
    return this.registerForm.get('document');
  }

  get areaCode() {
    return this.registerForm.get('areaCode');
  }

  get telephone() {
    return this.registerForm.get('telephone');
  }

  get location() {
    return this.registerForm.get('location');
  }

  get province() {
    return this.registerForm.get('province');
  }

  get address() {
    return this.registerForm.get('address');
  }

  get postalCode() {
    return this.registerForm.get('postalCode');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }


  getUserDto(): CreateUserDTO {
    return {
      username: this.registerForm.value.name,
      last_name: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      telephone_area_code: this.registerForm.value.areaCode,
      telephone_number: this.registerForm.value.telephone,
      document: this.registerForm.value.document,
      address_location: this.registerForm.value.location,
      address_province: this.registerForm.value.province,
      address_street: this.registerForm.value.address,
      postal_code: this.registerForm.value.postalCode,
    };
  }




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
