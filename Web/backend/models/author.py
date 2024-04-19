class Author():

  def __init__(self, author_id, name):
    self._id = author_id
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

  def create_author(self):
    pass

  def get_author(self):
    pass

  def get_authors(self):
    pass

  def edit_autor(self):
    pass

  def delete_author(self):
    pass
