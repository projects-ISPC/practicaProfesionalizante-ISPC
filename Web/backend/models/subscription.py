class Subscription:

  def __init__(self, subscription_id, due_date):
    self._id = subscription_id
    self._due_date = due_date

  @property
  def id(self):
    return self._id

  @id.setter
  def id(self, value):
    self._id = value

  @property
  def due_date(self):
    return self._id

  @due_date.setter
  def due_date(self, value):
    self._due_date = value

  def create_subscription():
    pass

  def edit_subscription():
    pass

  def get_subscription():
    pass

  def get_subscriptions():
    pass

  def delete_subscription():
    pass
