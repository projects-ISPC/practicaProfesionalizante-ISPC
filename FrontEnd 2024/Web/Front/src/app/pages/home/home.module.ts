import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component'
import { HeaderComponent } from './header/header.component';
import { BookCardModule } from '../../modules/book/book-card.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BookCardModule,
    TranslateModule,
  ]
})
export class HomeModule { }
