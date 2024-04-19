import { Author } from "../author/author.model";
import { Publisher } from "../publisher/publisher.model";

export class Book {

  private _title: string;
  private _author: Author;
  private _img: string;
  private _description: string;
  private _publisher: Publisher;
  private _isbn: string;
  private _pageAmount: number;
  private _language: string;
  private _genre: string;
  private _releaseDate: Date;
  private _score: number;
  private _stock: number;
  private _rentedTotal: number;

  constructor(title: string, img: string, description: string, author: Author, stock: number, publisher: Publisher,
    isbn: string, pageAmount: number, language: string, genre: string, releaseDate: Date, score: number, rentedTotal: number) {
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

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get author(): Author {
    return this._author;
  }

  public set author(author: Author) {
    this._author = author;
  }

  public get img(): string {
    return this._img;
  }

  public set img(img: string) {
    this._img = img;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get publisher(): Publisher {
    return this._publisher;
  }

  public set publisher(publisher: Publisher) {
    this._publisher = publisher;
  }

  public get isbn(): string {
    return this._isbn;
  }

  public set isbn(isbn: string) {
    this._isbn = isbn;
  }

  public get pageAmount(): number {
    return this._pageAmount;
  }

  public set pageAmount(pageAmount: number) {
    this._pageAmount = pageAmount;
  }

  public get language(): string {
    return this._language;
  }

  public set language(language: string) {
    this._language = language;
  }

  public get genre(): string {
    return this._genre;
  }

  public set genre(genre: string) {
    this._genre = genre;
  }

  public get releaseDate(): Date {
    return this._releaseDate;
  }

  public set releaseDate(releaseDate: Date) {
    this._releaseDate = releaseDate;
  }

  public get score(): number {
    return this._score;
  }

  public set score(score: number) {
    this._score = score;
  }

  public get stock(): number {
    return this._stock;
  }

  public set stock(stock: number) {
    this._stock = stock;
  }

  public get rentedTotal(): number {
    return this._rentedTotal;
  }

}
