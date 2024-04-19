from models.book import Book
from models.user import User


class Loan():
  def __init__(self, loan_id, loan_date, return_date):
    self._id = loan_id
    self._loanDate = loan_date
    self._return_date = return_date
    self._book = Book()
    self._user = User()

  @property
  def id(self):
    return self._id

  @id.setter
  def id(self, value):
    self._id = value

  @property
  def loan_date(self):
    return self._loanDate

  @loan_date.setter
  def loan_date(self, value):
    self._loanDate = value

  @property
  def return_date(self):
    return self._return_date

  @return_date.setter
  def return_date(self, value):
    self._return_date = value

  def crear_loan():
    pass

  def edit_loan():
    pass

  def get_loan():
    pass

  def get_loans():
    pass

  def delete_loan():
    pass
