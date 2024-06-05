import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { SearchService } from 'src/app/services/payment/search/search.service';
import { BookService } from 'src/app/services/book/book.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  title = '';

  constructor(
    private navigationService: NavigationService,
    private bookService: BookService,
    private translate: TranslateService,
  ) { }

  onClickSearch() {
    this.bookService.getSearchResults(this.title);
    this.navigationService.navigateToSearchBook();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
