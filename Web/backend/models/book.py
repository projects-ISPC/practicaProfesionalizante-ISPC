from models.author import Author
from models.genre import Genre
from models.publisher import Publisher


class Book:
  def __init__(self, title, img, description, isbn, total_page, language, release_year, format, ranking, stock):
    self._title = title
    self._author = Author()
    self._img = img
    self._description = description
    self._publisher = Publisher()
    self._isbn = isbn
    self._total_page = total_page
    self._language = language
    self._genre = Genre()
    self._releaseYear = release_year
    self._format = format
    self._ranking = ranking
    self._stock = stock

  @property
  def title(self):
    return self._title

  @title.setter
  def title(self, value):
    self._title = value

  @property
  def author(self):
    return self._author

  @author.setter
  def author(self, value):
    self._author = value

  @property
  def img(self):
    return self._img

  @img.setter
  def img(self, value):
    self._img = value

  @property
  def description(self):
    return self._description

  @description.setter
  def description(self, value):
    self._description = value

  @property
  def publisher(self):
    return self._publisher

  @publisher.setter
  def publisher(self, value):
    self._publisher = value

  @property
  def isbn(self):
    return self._isbn

  @isbn.setter
  def isbn(self, value):
    self._isbn = value

  @property
  def total_page(self):
    return self._total_page

  @total_page.setter
  def total_page(self, value):
    self._total_page = value

  @property
  def language(self):
    return self._language

  @language.setter
  def language(self, value):
    self._language = value

  @property
  def genre(self):
    return self._genre

  @genre.setter
  def genre(self, value):
    self._genre = value

  @property
  def releaseYear(self):
    return self._releaseYear

  @releaseYear.setter
  def releaseYear(self, value):
    self._releaseYear = value

  @property
  def format(self):
    return self._format

  @format.setter
  def format(self, value):
    self._format = value

  @property
  def ranking(self):
    return self._ranking

  @ranking.setter
  def ranking(self, value):
    self._ranking = value

  @property
  def stock(self):
    return self._stock

  @stock.setter
  def stock(self, value):
    self._stock = value

  def create_book():
    pass

  def get_book():
    pass

  def get_books():
    pass

  def edit_book():
    pass

  def delete_book():
    pass

  def search_book_byname():
    pass

  def search_book_byid():
    pass

  def show_book_availability():
    pass
