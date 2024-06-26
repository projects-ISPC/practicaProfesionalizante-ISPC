import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../../login/login-page/login-page.component';
import { RegisterPageComponent } from '../../login/register-page/register-page.component';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { AdminNavigationService } from 'src/app/admin/services/navigation/navigation.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Auth } from 'src/app/models/auth/auth-model';
import { Profile } from 'src/app/models/user/user-model';
import { Credentials } from 'src/app/models/credentials/credentials-model';
import { CartService } from 'src/app/services/cart/cart.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  profile: Profile | null = null;
  @Input() isAdmin = false;

  constructor(
    private modalService: NgbModal,
    private navigationService: NavigationService,
    private adminNavigationService: AdminNavigationService,
    private authService: AuthService,
    private cartService: CartService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  onClickLogIn() {
    const modalRef = this.modalService.open(LoginPageComponent, {
      fullscreen: true,
      ariaDescribedBy: 'Modal de Login',
      ariaLabelledBy: 'Modal de Login'
    });
  }

  onClickRegister() {
    const modalRef = this.modalService.open(RegisterPageComponent, {
      fullscreen: true,
      ariaDescribedBy: 'Modal de Registro',
      ariaLabelledBy: 'Modal de Registro'
    });
  }

  onClickNavigateToHome() {
    this.navigationService.navigateToHome();
  }

  onClickNavigateToCatalogue() {
    this.navigationService.navigateToCatalogue();
  }

  onClickNavigateToBookDashboard() {
    this.adminNavigationService.navigateToBookDashboard();
  }

  onClickNavigateToSalesDashboard() {
    this.adminNavigationService.navigateToSalesDashboard();
  }

  navigateToStoreDashboard() {
    this.adminNavigationService.navigateToStoreDashboard();
  }

  onClickNavigateToClientDashboard() {
    this.adminNavigationService.navigateToClientDashboard();
  }

  onClickNavigateToAuthorDashboard() {
    this.adminNavigationService.navigateToAuthorDashboard();
  }

  onClickNavigateToPublisherDashboard() {
    this.adminNavigationService.navigateToPublisherDashboard();
  }

  onClickNavigateToContact() {
    this.navigationService.navigateToContact();
  }

  onClickNavigateToAboutUs() {
    this.navigationService.navigateToAboutUs();
  }

  getProfile() {
    this.authService.getProfileListener().subscribe((user) => {
      this.profile = user;
    });
  }

  onProfile() {
    this.navigationService.navigateToProfile();
  }

  onLogout() {
    //TODO LOGOUT
    this.navigationService.navigateToHome();
  }

  logout() {
    this.authService.logoutUser().subscribe((response: boolean) => {
      if (!response) {
        return;
      }
      this.authService.clearProfile();
      this.cartService.clearCart();
      this.navigationService.navigateToHome();
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
