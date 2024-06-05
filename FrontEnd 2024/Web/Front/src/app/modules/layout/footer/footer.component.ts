import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private navigationService: NavigationService,
    private translate: TranslateService
  ) { }

  onClickHome() {
    this.navigationService.navigateToHome();
  }

  onClickCartDetail() {
    this.navigationService.navigateToCartDetail();
  }

  onClickCatalogue() {
    this.navigationService.navigateToCatalogue();
  }

  onClickMyAccount() {
    this.navigationService.navigateToProfile();
  }

  onClickAboutUs() {
    this.navigationService.navigateToAboutUs();
  }

  onClickNavigateToContact() {
    this.navigationService.navigateToContact()
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
