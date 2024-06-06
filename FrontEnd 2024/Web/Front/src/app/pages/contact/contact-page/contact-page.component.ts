import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent {

  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }
};
