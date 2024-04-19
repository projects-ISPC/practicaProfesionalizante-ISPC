import { Book } from "./book.model";
import { Author } from "../author/author.model";
import { Publisher } from "../publisher/publisher.model";
import recommendedBooks from '../simulation-data/books/recommendedBooks.json';
import incomingBooks from '../simulation-data/books/incomingBooks.json';
import bestSellingBooks from '../simulation-data/books/bestSellBooks.json';
import sugestedBooks from '../simulation-data/books/sugestedBooks.json';
import allBooks from '../simulation-data/books/allBooks.json';
import actualRentedBooks from '../simulation-data/books/actualRentedBooks.json';
import historyRentedBooks from '../simulation-data/books/historyRentedBooks.json';


export class BookService {

  getRecommended(): Book[] {

    let books = recommendedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));

    return books;
  }

  getIncomings(): Book[] {

    let books = incomingBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));

    return books;
  }

  getBestSelling(): Book[] {

    let books = bestSellingBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));

    return books;
  }

  getSugested(): Book[] {

    let books = sugestedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));

    return books;
  }

  getAllBooks(): Book[] {

    let books = allBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));

    return books;
  }

  getByGenre(genre: string): Book[] {
      genre = genre.trim().toLowerCase();

    let books = allBooks.filter(book => book.genre.trim().toLowerCase().includes(genre) || genre === 'todos' ).map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));

    return books;
  }

  getRentalHistory(): Book[] {

    let books = historyRentedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));

    return books;
  }

  getActualRented(): Book[] {

    let books = actualRentedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score, book.rentedTotal));

    return books;
  }

}
