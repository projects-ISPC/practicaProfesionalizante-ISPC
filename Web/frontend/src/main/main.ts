import { Book } from "../book/book.model";
import { BookService } from "../book/book.service";
import { BookRenderService } from "../book/book-render.service";
import { User } from "../user/user.model";
import { UserService } from "../user/user.service";
import { UserRenderService } from "../user/user-render.service";

const bookService = new BookService();
const bookRender = new BookRenderService();
const userService = new UserService();
const userRender = new UserRenderService();

const recomendedBooksElement = document.getElementById("recomended-books");
createRecomendedBooksView();

const incomingBooksElement = document.getElementById("incoming-books");
createIncomingBooksView();

const bestSellingBooksElement = document.getElementById("bestselling-books");
createBestSellingBooksView();

const sugestedBooksElement = document.getElementById("sugested-books");
createSugestedBooksView();

const dashboardBooksElement = document.getElementById("books-dashboard");
createBooksDashboard();

const dashboardUsersElement = document.getElementById("users-dashboard");
createUsersDashboard();

const booksCatalogElement = document.getElementById("books-catalog");
createBooksCatalog();

const booksRenResumeElement = document.getElementById("books-rent-resume");
createBooksRentResume();

const actualRentsElement = document.getElementById("actual-rents");
actualRentsElement?.classList.add('active');
actualRentsElement?.addEventListener("click", () => {
  resetActiveClass(actualRentsElement);
  renderActualRents();
});

const historyRentalElement = document.getElementById("history-rents");
historyRentalElement?.addEventListener("click", () => {
  resetActiveClass(historyRentalElement);
  renderRentalHistory();
});

const allGenresElement = document.getElementById("all-genres");
allGenresElement?.classList.add('active');
allGenresElement?.addEventListener("click", () => {
  resetActiveClass(allGenresElement);
  renderCatalogByGenre('todos');
});

const artGenreElement = document.getElementById("art-genre");
artGenreElement?.addEventListener("click", () => {
  resetActiveClass(artGenreElement);
  renderCatalogByGenre('arte');
});

const scyfyGenreElement = document.getElementById("scyfy-genre");
scyfyGenreElement?.addEventListener("click", () => {
  resetActiveClass(scyfyGenreElement);
  renderCatalogByGenre('ficcion');
});

const gastronomyGenreElement = document.getElementById("gastronomy-genre");
gastronomyGenreElement?.addEventListener("click", () => {
  resetActiveClass(gastronomyGenreElement);
  renderCatalogByGenre('gastronomia');
});

const childrensGenreElement = document.getElementById("childrens-genre");
childrensGenreElement?.addEventListener("click", () => {
  resetActiveClass(childrensGenreElement);
  renderCatalogByGenre('infantil');
});

const youthGenreElement = document.getElementById("youth -genre");
youthGenreElement?.addEventListener("click", () => {
  resetActiveClass(youthGenreElement);
  renderCatalogByGenre('juvenil');
});

const bussinesGenreElement = document.getElementById("bussines -genre");
bussinesGenreElement?.addEventListener("click", () => {
  resetActiveClass(bussinesGenreElement);
  renderCatalogByGenre('negocio');
});

function resetActiveClass(activeElement: HTMLElement) {
  allGenresElement?.classList.remove('active');
  artGenreElement?.classList.remove('active');
  scyfyGenreElement?.classList.remove('active');
  gastronomyGenreElement?.classList.remove('active');
  childrensGenreElement?.classList.remove('active');
  youthGenreElement?.classList.remove('active');
  bussinesGenreElement?.classList.remove('active');
  actualRentsElement?.classList.remove('active');
  historyRentalElement?.classList.remove('active');

  activeElement.classList.add('active')
}


function createRecomendedBooksView() {

  if (!recomendedBooksElement) {
    return;
  }

  let recommendedBooks: Book[] = bookService.getRecommended();

  let recommendedBooksView: HTMLDivElement = bookRender.createBooksView(recommendedBooks);

  recomendedBooksElement.appendChild(recommendedBooksView);
}


function createIncomingBooksView() {

  if (!incomingBooksElement) {
    return;
  }

  let books: Book[] = bookService.getIncomings();

  let incomingBooksView: HTMLDivElement = bookRender.createBooksView(books);

  incomingBooksElement.appendChild(incomingBooksView);
}

function createBestSellingBooksView() {

  if (!bestSellingBooksElement) {
    return;
  }

  let books: Book[] = bookService.getBestSelling();

  let incomingBooksView: HTMLDivElement = bookRender.createBooksView(books);

  bestSellingBooksElement.appendChild(incomingBooksView);
}

function createSugestedBooksView() {

  if (!sugestedBooksElement) {
    return;
  }

  let books: Book[] = bookService.getSugested();

  let sugestedBooksView: HTMLDivElement = bookRender.createBooksView(books);

  sugestedBooksElement.appendChild(sugestedBooksView);
}

function createBooksDashboard() {

  if (!dashboardBooksElement) {
    return;
  }

  let books: Book[] = bookService.getAllBooks();

  let booksDashboardView: HTMLDivElement = bookRender.createBooksTableview(books);

  dashboardBooksElement.appendChild(booksDashboardView);
}

function createUsersDashboard() {

  if (!dashboardUsersElement) {
    return;
  }

  let users: User[] = userService.getAllUsers();

  let usersDashboardView: HTMLDivElement = userRender.createUserssTableview(users);

  dashboardUsersElement.appendChild(usersDashboardView);
}

function createBooksCatalog() {

  if (!booksCatalogElement) {
    return;
  }

  let books: Book[] = bookService.getAllBooks();

  let catalogBooksView: HTMLDivElement = bookRender.createBooksView(books);

  booksCatalogElement.appendChild(catalogBooksView);
}

function renderCatalogByGenre(genre: string) {

  if (!booksCatalogElement) {
    return;
  }

  let books: Book[] = bookService.getByGenre(genre);

  let catalogBooksView: HTMLDivElement = bookRender.createBooksView(books);

  booksCatalogElement.innerHTML = '';
  booksCatalogElement.appendChild(catalogBooksView);
}

function createBooksRentResume() {;

  if (!booksRenResumeElement) {
    return;
  }

  let books: Book[] = bookService.getActualRented();

  let catalogBooksView: HTMLDivElement = bookRender.createBooksView(books);

  booksRenResumeElement.appendChild(catalogBooksView);
}

function renderActualRents() {

  if (!booksRenResumeElement) {
    return;
  }

  let books: Book[] = bookService.getActualRented();

  let catalogBooksView: HTMLDivElement = bookRender.createBooksView(books);

  booksRenResumeElement.innerHTML = '';
  booksRenResumeElement.appendChild(catalogBooksView);
}

function renderRentalHistory() {

  if (!booksRenResumeElement) {
    return;
  }

  let books: Book[] = bookService.getRentalHistory();

  let catalogBooksView: HTMLDivElement = bookRender.createBooksView(books);

  booksRenResumeElement.innerHTML = '';
  booksRenResumeElement.appendChild(catalogBooksView);
}
