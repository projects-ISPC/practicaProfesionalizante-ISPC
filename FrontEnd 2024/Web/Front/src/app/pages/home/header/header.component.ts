import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private navigationService: NavigationService,
    private translate: TranslateService
  ) { }

  onClickCatalogue() {
    this.navigationService.navigateToCatalogue();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
