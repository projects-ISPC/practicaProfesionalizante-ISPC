class Role:

  def __init__(self, role_id, name):
    self._id = role_id
    self._name = name

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

  def create_role(self):
    pass

  def get_role(self):
    pass

  def get_roles(self):
    pass

  def edit_role(self):
    pass

  def detele_role(self):
    pass
