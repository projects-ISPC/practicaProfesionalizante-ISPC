import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactPageComponent } from 'src/app/pages/contact/contact-page/contact-page.component';
import { ContactInfoComponent } from 'src/app/pages/contact/contact-info/contact-info.component';
import { ContactFormComponent } from 'src/app/pages/contact/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ContactPageComponent, ContactInfoComponent, ContactFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  exports: [ContactPageComponent, ContactInfoComponent, ContactFormComponent, TranslateModule]
})
export class ContactModule { }
