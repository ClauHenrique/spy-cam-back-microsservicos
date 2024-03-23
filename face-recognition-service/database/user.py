from database.connection import db

class User:

    def create_user(self, id, name):
        sql = """INSERT INTO usuario 
        (id, nome) 
        VALUES (%s, %s)"""

        db.mycursor.execute(sql, (id, name))
        db.mydb.commit()

    