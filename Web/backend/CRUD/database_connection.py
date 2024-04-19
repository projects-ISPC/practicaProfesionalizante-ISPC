import mysql.connector

class DatabaseConnection():

    def __init__(self) -> None:
        try:
            self.conexion = mysql.connector.connect(
                host = 'localhost',
                port = 3306,
                user = 'root',
                password = 123456,
                db = 'biblioteca-ISPC'

            )
        except mysql.connector.Error as descripcionError:
            print("No se pudo conectar!", descripcionError)
