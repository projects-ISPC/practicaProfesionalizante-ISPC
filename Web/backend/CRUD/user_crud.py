import database_connection


class UserCrud():
  def __int__(self):
    self.database = database_connection

  def save_user(self, document, name, last_name, telephone, mail, student, area_code, province, location, password,
                role_id):
    if self.conexion.is_connected():
      try:
        cursor = self.conexion.cursor()
        sentencia_sql = "INSERT INTO user VALUES( %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        data = (document, name, last_name, telephone, mail, student, area_code, province, location, password, role_id)

        cursor.execute(sentencia_sql, data)
        self.conexion.commit()
        self.conexion.close()

      except:
        print("No se pudo conectar a la base de datos!")

  def update_user(self, user_id, document, name, last_name, telephone, mail, student, area_code, province, location):
    if self.conexion.is_connected():
      try:
        cursor = self.conexion.cursor()
        sentencia_sql = "UPDATE user SET document =  %s, name =  %s, last_name =  %s, telephone =  %s, mail =  %s, student =  %s, area_code =  %s, province =  %s, location =  %s WHERE id = user_id"
        data = (document, name, last_name, telephone, mail, student, area_code, province, location, user_id)

        cursor.execute(sentencia_sql, data)
        self.conexion.commit()
        self.conexion.close()

      except:
        print("No se pudo conectar a la base de datos!")

  def delete_user(self, user_id):
    if self.conexion.is_connected():
      try:
        cursor = self.conexion.cursor()
        sentencia_sql = "DELETE FROM user WHERE id =  %s"
        data = (user_id)

        cursor.execute(sentencia_sql, data)
        self.conexion.commit()
        self.conexion.close()

      except:
        print("No se pudo conectar a la base de datos!")

  def get_users(self):
    if self.conexion.is_connected():
      try:
        cursor = self.conexion.cursor()
        sentencia_sql = "SELECT * FROM user"

        users = cursor.execute(sentencia_sql)
        self.conexion.commit()
        self.conexion.close()

        return users

      except:
        print("No se pudo conectar a la base de datos!")
