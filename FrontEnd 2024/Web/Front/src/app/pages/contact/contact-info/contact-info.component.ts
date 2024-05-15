import { Component } from '@angular/core';
import { ContactData, SocialMedia } from 'src/app/models/contact/contact-model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})

export class ContactInfoComponent {
  description: string;
  socialMedia: SocialMedia[];
  contactData: ContactData[];

  constructor() {
    this.description = 'Podés encontrarnos en nuestras redes sociales',
    this.socialMedia = [
      {
        ariaLabel: 'Ir a Instagram.',
        src: './assets/icons/instagram-icon.png',
        link: 'https://www.instagram.com/'
      },
      {
        ariaLabel: 'Ir a Twitter.',
        src: './assets/icons/twitter-icon.png',
        link: 'https://twitter.com/'
      },
      {
        ariaLabel: 'Ir a Facebook.',
        src: './assets/icons/facebook-icon.png',
        link: 'https://www.facebook.com/'
      }
    ];
    this.contactData = [
      {
        title: 'Correo electrónico',
        text: 'contacto@biblioteca.com',
        icon: './assets/icons/mail.png'
      },
      {
        title: 'Teléfono',
        text: '1126789634',
        icon: './assets/icons/phone-call.png'
      },
      {
        title: 'Ubicación',
        text: 'Humberto Primo 467. 2 Piso. Córdoba. Argentina.',
        icon: './assets/icons/map-pin.png'
      }
    ];
  }
}
