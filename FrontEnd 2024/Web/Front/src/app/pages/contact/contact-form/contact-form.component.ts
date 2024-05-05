import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

  description: string;
  contactForm!: FormGroup;
  validForm: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.description = 'Dejanos tu comentario o sugerencia, responderemos a la brevedad.';
    this.validForm = false;
  }

  onSaveHandle(event: Event) {
    event.preventDefault;
    console.log(event,'Formulario enviado');
  }

  ngOnInit(): void {
    this.createForm();
    this.onChanges();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  validateInputName(event: KeyboardEvent) {
    const pattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ' ]+$/;
    const inputChar = String.fromCharCode(event.charCode);
  
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onChanges(): void {
    this.contactForm.valueChanges.subscribe(val => {
      this.validForm = this.contactForm.status === 'VALID' ? true : false;
    });
  }
};
