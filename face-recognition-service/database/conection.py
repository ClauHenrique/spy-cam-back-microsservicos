import mysql.connector

class BD:
    def __init__(self):

        self.mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="claudio",
        database="recognitionsv"
        )

        self.mycursor = self.mydb.cursor()
    

    def insert_user(self, id, name):
        sql = """INSERT INTO usuario 
        (id, nome) 
        VALUES (%s, %s)"""

        self.mycursor.execute(sql, (id, name))
        self.mydb.commit()
    