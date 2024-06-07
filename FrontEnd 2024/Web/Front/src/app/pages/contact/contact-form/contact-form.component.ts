import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SendContact } from 'src/app/models/contact/contact-model';
import { ContactserviceService } from 'src/app/services/contact/contactservice.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

  description: string;
  contactForm!: FormGroup;
  validForm: boolean;

  constructor(private formBuilder: FormBuilder, private contactService: ContactserviceService, private translate: TranslateService) {
    this.description = 'Dejanos tu comentario o sugerencia, responderemos a la brevedad.';
    this.validForm = false;
  }

  onSaveHandle(event: Event) {
    event.preventDefault;
    this.contactService.sendContact(this.contactForm.value as SendContact).subscribe({
      next: (contactRequest) => {
        console.log(contactRequest);
      },
      error: (contactError) => {
        console.error(contactError);
      },
      complete: () => {
        console.info("Mensaje enviado");
        this.contactForm.reset();
      }
    })
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

  switchLanguage(language: string) {
    this.translate.use(language);
  }
};
