import { Component } from '@angular/core';
import { ContactData, SocialMedia } from 'src/app/models/contact/contact-model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  socialMedia: SocialMedia[];
  contactData: ContactData[];

  constructor(private translate: TranslateService) {
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
        title: 'titulo_email',
        text: 'contacto@biblioteca.com',
        icon: './assets/icons/mail.png'
      },
      {
        title: 'titulo_teléfono',
        text: '1126789634',
        icon: './assets/icons/phone-call.png'
      },
      {
        title: 'titulo_ubicación',
        text: 'Humberto Primo 467. 2 Piso. Córdoba. Argentina.',
        icon: './assets/icons/map-pin.png'
      }
    ];
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
