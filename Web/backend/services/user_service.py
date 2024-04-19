from models.user import User

class UserService:

  def __init__(self) -> None:
    user = User()

  def create_user(self):
    self.user.create_user()

  def get_users(self):
    self.user.get_users()

  def delete_user(self):
    self.user.delete_user()

  def edit_user(self):
    self.user.edit_user()
