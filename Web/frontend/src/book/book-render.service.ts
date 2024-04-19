import { Book } from "./book.model";

export class BookRenderService {


  createBooksView(books: Book[]): HTMLDivElement {
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("container-fluid");

    let mainRow = document.createElement("div");
    mainRow.classList.add("row", "gy-5", "py-4", "ps-3", "ps-md-5");

    let booksElement = books.map(book =>
      `<div class="col-6 col-md-4 col-lg-3 col-xl-2 book-resume">
      <a href="./book-detail.html">
        <div class="row ps-4">
         <img src="${book.img}" alt="imagen de portada de el libro ${book.title}" class="img-fluid col-8">
         <span class="py-2">${this.getScoreStars(book.score)}</span>
         <h2>${book.title}</h2>
         <h3>${book.author.name}</h3>
        </div>
        </a>
      </div>`
    );

    booksElement.forEach(element => mainRow.insertAdjacentHTML("beforeend", element));
    mainContainer.appendChild(mainRow);
    return mainContainer;
  }

  createBooksTableview(books: Book[]): HTMLTableElement {
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    table.classList.add("table", "table-hover", "align-middle")

    let head =
      `<thead>
    <tr>
      <th scope="col">Libro</th>
      <th scope="col">Autor</th>
      <th scope="col">Stock</th>
      <th scope="col">Prestados</th>
      <th scope="col">Disponibles</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>`

    table.insertAdjacentHTML("beforeend", head);

    let booksElement = books.map(book =>
      `<tr>
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
  </tr>`
    );

    booksElement.forEach(element => tbody.insertAdjacentHTML("beforeend", element));
    table.appendChild(tbody);

    return table;
  }

  private getScoreStars(score: number): string {
    let starsScore = '';

    for (let index = 0; index < score; index++) {
      starsScore = starsScore.concat("⭐")
    }

    return starsScore;
  }
}
