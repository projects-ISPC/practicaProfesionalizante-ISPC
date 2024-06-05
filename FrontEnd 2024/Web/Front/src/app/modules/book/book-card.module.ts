import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksRowCardsComponent } from './books-row-cards/books-row-cards.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    BookCardComponent,
    BooksRowCardsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    BooksRowCardsComponent, TranslateModule]
})
export class BookCardModule { }
