import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from 'src/app/pages/contact/contact-page/contact-page.component';
import { ContactInfoComponent } from 'src/app/pages/contact/contact-info/contact-info.component';

@NgModule({
  declarations: [ContactPageComponent, ContactInfoComponent],
  imports: [CommonModule],
  exports: [ContactPageComponent, ContactInfoComponent]
})
export class ContactModule { }