/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookService = void 0;
const book_model_1 = __webpack_require__(2);
const author_model_1 = __webpack_require__(3);
const publisher_model_1 = __webpack_require__(4);
const recommendedBooks_json_1 = __importDefault(__webpack_require__(5));
const incomingBooks_json_1 = __importDefault(__webpack_require__(6));
const bestSellBooks_json_1 = __importDefault(__webpack_require__(7));
const sugestedBooks_json_1 = __importDefault(__webpack_require__(8));
const allBooks_json_1 = __importDefault(__webpack_require__(9));
const actualRentedBooks_json_1 = __importDefault(__webpack_require__(10));
const historyRentedBooks_json_1 = __importDefault(__webpack_require__(11));
class BookService {
    getRecommended() {
        let books = recommendedBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));
        return books;
    }
    getIncomings() {
        let books = incomingBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));
        return books;
    }
    getBestSelling() {
        let books = bestSellBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));
        return books;
    }
    getSugested() {
        let books = sugestedBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));
        return books;
    }
    getAllBooks() {
        let books = allBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));
        return books;
    }
    getByGenre(genre) {
        genre = genre.trim().toLowerCase();
        let books = allBooks_json_1.default.filter(book => book.genre.trim().toLowerCase().includes(genre) || genre === 'todos').map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));
        return books;
    }
    getRentalHistory() {
        let books = historyRentedBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));
        return books;
    }
    getActualRented() {
        let books = actualRentedBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));
        return books;
    }
}
exports.BookService = BookService;


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Book = void 0;
class Book {
    constructor(title, img, description, author, stock, publisher, isbn, pageAmount, language, genre, releaseDate, score, rentedTotal) {
        this._title = title;
        this._img = img;
        this._description = description;
        this._author = author;
        this._stock = stock;
        this._publisher = publisher;
        this._isbn = isbn;
        this._pageAmount = pageAmount;
        this._language = language;
        this._genre = genre;
        this._score = score;
        this._releaseDate = releaseDate;
        this._rentedTotal = rentedTotal;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get author() {
        return this._author;
    }
    set author(author) {
        this._author = author;
    }
    get img() {
        return this._img;
    }
    set img(img) {
        this._img = img;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get publisher() {
        return this._publisher;
    }
    set publisher(publisher) {
        this._publisher = publisher;
    }
    get isbn() {
        return this._isbn;
    }
    set isbn(isbn) {
        this._isbn = isbn;
    }
    get pageAmount() {
        return this._pageAmount;
    }
    set pageAmount(pageAmount) {
        this._pageAmount = pageAmount;
    }
    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
    }
    get genre() {
        return this._genre;
    }
    set genre(genre) {
        this._genre = genre;
    }
    get releaseDate() {
        return this._releaseDate;
    }
    set releaseDate(releaseDate) {
        this._releaseDate = releaseDate;
    }
    get score() {
        return this._score;
    }
    set score(score) {
        this._score = score;
    }
    get stock() {
        return this._stock;
    }
    set stock(stock) {
        this._stock = stock;
    }
    get rentedTotal() {
        return this._rentedTotal;
    }
}
exports.Book = Book;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Author = void 0;
class Author {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
exports.Author = Author;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Publisher = void 0;
class Publisher {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
exports.Publisher = Publisher;


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Todo por volver a verte","author":{"name":"Florencia Vercellone"},"img":"../assets/img/book-cover/todo-por-volver-a-verte.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Sanar la herida","author":{"name":"Claudia Luchetti"},"img":"../assets/img/book-cover/sanar-la-herida.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"23/12/2020","score":4,"stock":100,"rentedTotal":10},{"title":"Buscando a Dorothy","author":{"name":"Elizabeth Letts"},"img":"../assets/img/book-cover/buscando-a-dorothy.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":4,"stock":100,"rentedTotal":10},{"title":"Sigue mi voz","author":{"name":"Ariana Godoy"},"img":"../assets/img/book-cover/sigue-mi-voz.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"La teoría de lo perfecto","author":{"name":"Sophie Gonzalez"},"img":"../assets/img/book-cover/la-teoria-de-lo-perfecto.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Un cuento perfecto","author":{"name":"Elísabet Benavent"},"img":"../assets/img/book-cover/un-cuento-perfecto.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":4,"stock":100,"rentedTotal":10}]');

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Punk 57","author":{"name":"Penelope Douglas"},"img":"../assets/img/book-cover/punk-57.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Prisionero","author":{"name":"Roma Damned"},"img":"../assets/img/book-cover/prisionero.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"23/12/2020","score":4,"stock":100,"rentedTotal":10},{"title":"Boulevard","author":{"name":"Flor M. Salvador"},"img":"../assets/img/book-cover/boulevard.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"La casa de las grietas","author":{"name":"Krystal Sutherland"},"img":"../assets/img/book-cover/la-casa-de-las-grietas.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":4,"stock":100,"rentedTotal":10},{"title":"Un linaje oscuro","author":{"name":"Victoria Vilchez"},"img":"../assets/img/book-cover/un-linaje-oscuro.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Violeta","author":{"name":"Isabel Allende"},"img":"../assets/img/book-cover/violeta.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":4,"stock":100,"rentedTotal":10}]');

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Un cuento perfecto","author":{"name":"Elísabet Benavent"},"img":"../assets/img/book-cover/un-cuento-perfecto.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"El camino del artista","author":{"name":"Julia Cameron"},"img":"../assets/img/book-cover/el-camino-del-artista.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"23/12/2020","score":4,"stock":100,"rentedTotal":10},{"title":"Violeta","author":{"name":"Isabel Allende"},"img":"../assets/img/book-cover/violeta.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Pensar a la Japonesa","author":{"name":"Le Yen Mai"},"img":"../assets/img/book-cover/pensar-a-la-japonesa.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":4,"stock":100,"rentedTotal":10},{"title":"Heartstopper","author":{"name":"Alice Oseman"},"img":"../assets/img/book-cover/heartstopper.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Sanar la herida","author":{"name":"Claudia Luchetti"},"img":"../assets/img/book-cover/sanar-la-herida.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":4,"stock":100,"rentedTotal":10}]');

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Punk 57","author":{"name":"Penelope Douglas"},"img":"../assets/img/book-cover/punk-57.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Prisionero","author":{"name":"Roma Damned"},"img":"../assets/img/book-cover/prisionero.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"23/12/2020","score":4,"stock":100,"rentedTotal":10},{"title":"Boulevard","author":{"name":"Flor M. Salvador"},"img":"../assets/img/book-cover/boulevard.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"La casa de las grietas","author":{"name":"Krystal Sutherland"},"img":"../assets/img/book-cover/la-casa-de-las-grietas.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":4,"stock":100,"rentedTotal":10},{"title":"Un linaje oscuro","author":{"name":"Victoria Vilchez"},"img":"../assets/img/book-cover/un-linaje-oscuro.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Violeta","author":{"name":"Isabel Allende"},"img":"../assets/img/book-cover/violeta.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":4,"stock":100,"rentedTotal":10}]');

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Un cuento perfecto","author":{"name":"Elísabet Benavent"},"img":"../assets/img/book-cover/un-cuento-perfecto.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"infantil","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"El camino del artista","author":{"name":"Julia Cameron"},"img":"../assets/img/book-cover/el-camino-del-artista.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"arte gastronomia","releaseDate":"23/12/2020","score":4,"stock":100,"rentedTotal":10},{"title":"Violeta","author":{"name":"Isabel Allende"},"img":"../assets/img/book-cover/violeta.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"juvenil","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Pensar a la Japonesa","author":{"name":"Le Yen Mai"},"img":"../assets/img/book-cover/pensar-a-la-japonesa.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"negocio gastronomia","releaseDate":"","score":4,"stock":100,"rentedTotal":10},{"title":"Heartstopper","author":{"name":"Alice Oseman"},"img":"../assets/img/book-cover/heartstopper.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"juvenil","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Sanar la herida","author":{"name":"Claudia Luchetti"},"img":"../assets/img/book-cover/sanar-la-herida.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"juvenil","releaseDate":"","score":4,"stock":100,"rentedTotal":10},{"title":"Punk 57","author":{"name":"Penelope Douglas"},"img":"../assets/img/book-cover/punk-57.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"arte","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Prisionero","author":{"name":"Roma Damned"},"img":"../assets/img/book-cover/prisionero.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"ficcion","releaseDate":"23/12/2020","score":4,"stock":100,"rentedTotal":10},{"title":"Boulevard","author":{"name":"Flor M. Salvador"},"img":"../assets/img/book-cover/boulevard.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"ficcion gastronomia","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"La casa de las grietas","author":{"name":"Krystal Sutherland"},"img":"../assets/img/book-cover/la-casa-de-las-grietas.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"juvenil","releaseDate":"","score":4,"stock":100,"rentedTotal":10},{"title":"Un linaje oscuro","author":{"name":"Victoria Vilchez"},"img":"../assets/img/book-cover/un-linaje-oscuro.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"ficcion","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Todo por volver a verte","author":{"name":"Florencia Vercellone"},"img":"../assets/img/book-cover/todo-por-volver-a-verte.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"infantil","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Buscando a Dorothy","author":{"name":"Elizabeth Letts"},"img":"../assets/img/book-cover/buscando-a-dorothy.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"infantil","releaseDate":"","score":4,"stock":100,"rentedTotal":10},{"title":"Sigue mi voz","author":{"name":"Ariana Godoy"},"img":"../assets/img/book-cover/sigue-mi-voz.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"negocio","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"La teoría de lo perfecto","author":{"name":"Sophie Gonzalez"},"img":"../assets/img/book-cover/la-teoria-de-lo-perfecto.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"negocio juvenil","releaseDate":"","score":5,"stock":100,"rentedTotal":10}]');

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Buscando a Dorothy","author":{"name":"Elizabeth Letts"},"img":"../assets/img/book-cover/buscando-a-dorothy.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"infantil","releaseDate":"","score":4,"stock":100,"rentedTotal":10},{"title":"Sigue mi voz","author":{"name":"Ariana Godoy"},"img":"../assets/img/book-cover/sigue-mi-voz.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"negocio","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"La teoría de lo perfecto","author":{"name":"Sophie Gonzalez"},"img":"../assets/img/book-cover/la-teoria-de-lo-perfecto.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"negocio juvenil","releaseDate":"","score":5,"stock":100,"rentedTotal":10}]');

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Un cuento perfecto","author":{"name":"Elísabet Benavent"},"img":"../assets/img/book-cover/un-cuento-perfecto.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"infantil","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"El camino del artista","author":{"name":"Julia Cameron"},"img":"../assets/img/book-cover/el-camino-del-artista.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"arte gastronomia","releaseDate":"23/12/2020","score":4,"stock":100,"rentedTotal":10},{"title":"Violeta","author":{"name":"Isabel Allende"},"img":"../assets/img/book-cover/violeta.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"juvenil","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Pensar a la Japonesa","author":{"name":"Le Yen Mai"},"img":"../assets/img/book-cover/pensar-a-la-japonesa.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"negocio gastronomia","releaseDate":"","score":4,"stock":100,"rentedTotal":10},{"title":"Heartstopper","author":{"name":"Alice Oseman"},"img":"../assets/img/book-cover/heartstopper.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"juvenil","releaseDate":"","score":5,"stock":100,"rentedTotal":10},{"title":"Sanar la herida","author":{"name":"Claudia Luchetti"},"img":"../assets/img/book-cover/sanar-la-herida.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"juvenil","releaseDate":"","score":4,"stock":100,"rentedTotal":10}]');

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookRenderService = void 0;
class BookRenderService {
    createBooksView(books) {
        let mainContainer = document.createElement("div");
        mainContainer.classList.add("container-fluid");
        let mainRow = document.createElement("div");
        mainRow.classList.add("row", "gy-5", "py-4", "ps-3", "ps-md-5");
        let booksElement = books.map(book => `<div class="col-6 col-md-4 col-lg-3 col-xl-2 book-resume">
      <a href="./book-detail.html">
        <div class="row ps-4">
         <img src="${book.img}" alt="imagen de portada de el libro ${book.title}" class="img-fluid col-8">
         <span class="py-2">${this.getScoreStars(book.score)}</span>
         <h2>${book.title}</h2>
         <h3>${book.author.name}</h3>
        </div>
        </a>
      </div>`);
        booksElement.forEach(element => mainRow.insertAdjacentHTML("beforeend", element));
        mainContainer.appendChild(mainRow);
        return mainContainer;
    }
    createBooksTableview(books) {
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        table.classList.add("table", "table-hover", "align-middle");
        let head = `<thead>
    <tr>
      <th scope="col">Libro</th>
      <th scope="col">Autor</th>
      <th scope="col">Stock</th>
      <th scope="col">Prestados</th>
      <th scope="col">Disponibles</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>`;
        table.insertAdjacentHTML("beforeend", head);
        let booksElement = books.map(book => `<tr>
    <td>
      <div class="row">
        <div class="col-8 col-lg-2">
          <img src="${book.img}" alt="imagen de portada de el libro ${book.title}" class="img-fluid">
        </div>
        <div class="col-12 col-lg-5 align-self-center">
          <span>${book.title}</span>
        </div>
      </div>
    </td>
    <td>${book.author.name}</td>
    <td>${book.stock}</td>
    <td>${book.rentedTotal}</td>
    <td>${Math.max(0, book.stock - book.rentedTotal)}</td>
    <td>
      <div class="row">
        <div class="col-3">
          <button class="edit-btn" type="button" role="button" title="editar"><i class="bi bi-pencil-square"></i>
          </button>
        </div>
        <div class="col-3">
          <button class="trash-btn" type="button" role="button" title="eliminar" data-bs-toggle="modal" data-bs-target="#deleteBook"><i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </td>
  </tr>`);
        booksElement.forEach(element => tbody.insertAdjacentHTML("beforeend", element));
        table.appendChild(tbody);
        return table;
    }
    getScoreStars(score) {
        let starsScore = '';
        for (let index = 0; index < score; index++) {
            starsScore = starsScore.concat("⭐");
        }
        return starsScore;
    }
}
exports.BookRenderService = BookRenderService;


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const user_model_1 = __webpack_require__(14);
const allUsers_json_1 = __importDefault(__webpack_require__(15));
class UserService {
    getAllUsers() {
        let users = allUsers_json_1.default.map(user => new user_model_1.User(user.name, user.profilePic, user.supscription, user.rentedTotal, user.actualRented));
        return users;
    }
}
exports.UserService = UserService;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
class User {
    constructor(name, profilePic, subscription, rentedTotal, actualRented) {
        this._name = name;
        this._profilePic = profilePic;
        this._subscription = subscription;
        this._rentedTotal = rentedTotal;
        this._actualRented = actualRented;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get subscription() {
        return this._subscription;
    }
    set subscription(subscription) {
        this._subscription = subscription;
    }
    get rentedTotal() {
        return this._rentedTotal;
    }
    set rentedTotal(rentedTotal) {
        this._rentedTotal = rentedTotal;
    }
    get actualRented() {
        return this._actualRented;
    }
    set actualRented(actualRented) {
        this._actualRented = actualRented;
    }
}
exports.User = User;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Mariano Salgado","supscription":true,"profilePic":"../assets/img/users-profile-photos/mariano-salgado.png","actualRented":2,"rentedTotal":4},{"name":"Mariana Herrera","supscription":false,"profilePic":"../assets/img/users-profile-photos/mariana-herrera.png","actualRented":0,"rentedTotal":10},{"name":"Pedro Altamar","supscription":true,"profilePic":"../assets/img/users-profile-photos/pedro-altamar.png","actualRented":3,"rentedTotal":5},{"name":"juan-cruz","supscription":true,"profilePic":"../assets/img/users-profile-photos/juan-cruz.png","actualRented":1,"rentedTotal":6},{"name":"Romina Belp","supscription":true,"profilePic":"../assets/img/users-profile-photos/romina-belp.png","actualRented":2,"rentedTotal":8},{"name":"Jonathan Hernandez","supscription":false,"profilePic":"../assets/img/users-profile-photos/jonathan-hernandez.png","actualRented":0,"rentedTotal":15},{"name":"Marcos Guerrin","supscription":false,"profilePic":"../assets/img/users-profile-photos/marcos-guerrin.png","actualRented":0,"rentedTotal":2},{"name":"Lucia Estrada","supscription":false,"profilePic":"../assets/img/users-profile-photos/lucia-estrada.png","actualRented":4,"rentedTotal":24}]');

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRenderService = void 0;
class UserRenderService {
    createUserssTableview(books) {
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        table.classList.add("table", "table-hover", "align-middle");
        let head = `<thead>
    <tr>
    <th scope="col">Socio</th>
    <th scope="col">Estado de supscripción</th>
    <th scope="col">Préstamos actuales</th>
    <th scope="col">Historial de préstamos</th>
    </tr>
  </thead>`;
        table.insertAdjacentHTML("beforeend", head);
        let userElements = books.map(user => `  <tr>
      <td>
        <div class="row">
          <div class="col-9 col-lg-3">
            <img src="${user.profilePic}" alt="Foto de perfil del usuario ${user.name}"
              class="img-fluid">
          </div>
          <div class="col-12 col-lg-5 align-self-center">
            <span>${user.name}</span>
          </div>
        </div>
      </td>
      <td>
        <div class="row badge rounded-pill status-pill py-2">
          <div class="col">
            <i class="bi bi-circle-fill ${user.subscription ? "text-secondary-green" : "text-secondary-alter-red"}"></i>
            <span class="text-center">${user.subscription ? "Activo" : "Inactivo"}</span>
          </div>
        </div>
      </td>
      <td>${user.actualRented} libro/s <a href="#" class="text-secondary-alter-red">ver detalle</a></td>
      <td>${user.rentedTotal} libro/s <a href="#" class="text-secondary-alter-red">ver detalle</a></td>
    </tr>`);
        userElements.forEach(element => tbody.insertAdjacentHTML("beforeend", element));
        table.appendChild(tbody);
        return table;
    }
}
exports.UserRenderService = UserRenderService;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const book_service_1 = __webpack_require__(1);
const book_render_service_1 = __webpack_require__(12);
const user_service_1 = __webpack_require__(13);
const user_render_service_1 = __webpack_require__(16);
const bookService = new book_service_1.BookService();
const bookRender = new book_render_service_1.BookRenderService();
const userService = new user_service_1.UserService();
const userRender = new user_render_service_1.UserRenderService();
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
function resetActiveClass(activeElement) {
    allGenresElement?.classList.remove('active');
    artGenreElement?.classList.remove('active');
    scyfyGenreElement?.classList.remove('active');
    gastronomyGenreElement?.classList.remove('active');
    childrensGenreElement?.classList.remove('active');
    youthGenreElement?.classList.remove('active');
    bussinesGenreElement?.classList.remove('active');
    actualRentsElement?.classList.remove('active');
    historyRentalElement?.classList.remove('active');
    activeElement.classList.add('active');
}
function createRecomendedBooksView() {
    if (!recomendedBooksElement) {
        return;
    }
    let recommendedBooks = bookService.getRecommended();
    let recommendedBooksView = bookRender.createBooksView(recommendedBooks);
    recomendedBooksElement.appendChild(recommendedBooksView);
}
function createIncomingBooksView() {
    if (!incomingBooksElement) {
        return;
    }
    let books = bookService.getIncomings();
    let incomingBooksView = bookRender.createBooksView(books);
    incomingBooksElement.appendChild(incomingBooksView);
}
function createBestSellingBooksView() {
    if (!bestSellingBooksElement) {
        return;
    }
    let books = bookService.getBestSelling();
    let incomingBooksView = bookRender.createBooksView(books);
    bestSellingBooksElement.appendChild(incomingBooksView);
}
function createSugestedBooksView() {
    if (!sugestedBooksElement) {
        return;
    }
    let books = bookService.getSugested();
    let sugestedBooksView = bookRender.createBooksView(books);
    sugestedBooksElement.appendChild(sugestedBooksView);
}
function createBooksDashboard() {
    if (!dashboardBooksElement) {
        return;
    }
    let books = bookService.getAllBooks();
    let booksDashboardView = bookRender.createBooksTableview(books);
    dashboardBooksElement.appendChild(booksDashboardView);
}
function createUsersDashboard() {
    if (!dashboardUsersElement) {
        return;
    }
    let users = userService.getAllUsers();
    let usersDashboardView = userRender.createUserssTableview(users);
    dashboardUsersElement.appendChild(usersDashboardView);
}
function createBooksCatalog() {
    if (!booksCatalogElement) {
        return;
    }
    let books = bookService.getAllBooks();
    let catalogBooksView = bookRender.createBooksView(books);
    booksCatalogElement.appendChild(catalogBooksView);
}
function renderCatalogByGenre(genre) {
    if (!booksCatalogElement) {
        return;
    }
    let books = bookService.getByGenre(genre);
    let catalogBooksView = bookRender.createBooksView(books);
    booksCatalogElement.innerHTML = '';
    booksCatalogElement.appendChild(catalogBooksView);
}
function createBooksRentResume() {
    ;
    if (!booksRenResumeElement) {
        return;
    }
    let books = bookService.getActualRented();
    let catalogBooksView = bookRender.createBooksView(books);
    booksRenResumeElement.appendChild(catalogBooksView);
}
function renderActualRents() {
    if (!booksRenResumeElement) {
        return;
    }
    let books = bookService.getActualRented();
    let catalogBooksView = bookRender.createBooksView(books);
    booksRenResumeElement.innerHTML = '';
    booksRenResumeElement.appendChild(catalogBooksView);
}
function renderRentalHistory() {
    if (!booksRenResumeElement) {
        return;
    }
    let books = bookService.getRentalHistory();
    let catalogBooksView = bookRender.createBooksView(books);
    booksRenResumeElement.innerHTML = '';
    booksRenResumeElement.appendChild(catalogBooksView);
}

})();

/******/ })()
;