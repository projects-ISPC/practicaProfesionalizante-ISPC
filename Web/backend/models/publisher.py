class Publisher():

  def __init__(self, publisher_id, name):
    self._id = publisher_id
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

  def create_publisher(self):
    pass

  def get_publisher(self):
    pass

  def get_publishers(self):
    pass

  def edit_publisher(self):
    pass

  def delete_publisher(self):
    pass
