import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    RegisterPageComponent,
    LoginPageComponent,
    TranslateModule,
  ]
})
export class LoginModule { }
