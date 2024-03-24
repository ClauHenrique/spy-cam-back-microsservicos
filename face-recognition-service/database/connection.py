import mysql.connector

class DB:
    def __init__(self):

        self.mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="claudio",
        database="spy_cam"
        )

        self.mycursor = self.mydb.cursor()

db = DB()