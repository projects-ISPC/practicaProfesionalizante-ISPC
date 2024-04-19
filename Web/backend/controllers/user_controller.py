from services.user_service import UserService


class UserController:

  def __init__(self) -> None:
    user_service = UserService()

  def create_user(self):
    UserService.create_user()

  def get_users(self):
    UserService.get_users()

  def delete_user(self):
    UserService.delete_user()

  def edit_user(self):
    UserService.edit_user()
