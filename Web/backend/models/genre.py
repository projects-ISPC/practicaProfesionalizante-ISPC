class Genre():

  def __init__(self, genre_id, name):
    self._id = genre_id
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

  def create_genre(self):
    pass

  def edit_genre(self):
    pass

  def delete_genre(self):
    pass

  def get_genre(self):
    pass

  def get_genres(self):
    pass
