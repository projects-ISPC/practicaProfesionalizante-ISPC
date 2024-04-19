from models.role import Role
from models.subscription import Subscription
from CRUD.user_crud import UserCrud


class User:

  def __init__(self, user_id, name, last_name, document, area_code, telephone, location, province, mail, password):
    self._id = user_id
    self._name = name
    self._last_name = last_name
    self._document = document
    self._areaCode = area_code
    self._telephone = telephone
    self._location = location
    self._province = province
    self._mail = mail
    self._password = password
    self._role = Role()
    self._subscription = Subscription()
    self.crud = UserCrud()

  @property
  def id(self):
    return self._id

  @id.setter
  def id(self, value):
    self._id = value

  @property
  def name(self):
    return self._name

  @name.setter
  def name(self, value):
    self._name = value

  @property
  def last_name(self):
    return self._last_name

  @last_name.setter
  def last_name(self, value):
    self._last_name = value

  @property
  def document(self):
    return self._document

  @document.setter
  def document(self, value):
    self._document = value

  @property
  def area_code(self):
    return self._areaCode

  @area_code.setter
  def area_code(self, value):
    self._areaCode = value

  @property
  def telephone(self):
    return self._telephone

  @telephone.setter
  def telephone(self, value):
    self._telephone = value

  @property
  def location(self):
    return self._location

  @location.setter
  def location(self, value):
    self._location = value

  @property
  def province(self):
    return self._province

  @province.setter
  def province(self, value):
    self._province = value

  @property
  def mail(self):
    return self._mail

  @mail.setter
  def mail(self, value):
    self._mail = value

  @property
  def password(self):
    return self._password

  @password.setter
  def password(self, value):
    self._password = value

  @property
  def role(self):
    return self._role

  @id.setter
  def role(self, value):
    self._role = value

  @property
  def subscription(self):
    return self._subscription

  @id.setter
  def subscription(self, value):
    self._subscription = value

  def create_user(self):
    self.crud.save_user()

  def search_user(self):
    pass

  def edit_user(self):
    self.crud.update_user()

  def delete_user(self):
    self.crud.delete_user()

  def get_user(self):
    pass

  def get_users(self):
    self.crud.get_users()

  def validate_login(self):
    pass

  def get_loan_history(self):
    pass
