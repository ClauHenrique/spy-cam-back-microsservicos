from database.connection import db

class Person:

    def create_person(self, id, name, photos):
        sql = """INSERT INTO pessoa 
        (id, nome_pessoa, fotos) 
        VALUES (%s, %s, %s)"""

        db.mycursor.execute(sql, (id, name, photos))
        db.mydb.commit()
    
    def create_user_person(self, id, id_user, id_person):
        sql = """INSERT INTO usuario_pessoa 
        (id, usuario_id, pessoa_id) 
        VALUES (%s, %s, %s)"""

        db.mycursor.execute(sql, (id, id_user, id_person))
        db.mydb.commit()
    
    def create_person(self, id, name, photos):
        sql = """INSERT INTO pessoa 
        (id, nome_pessoa, fotos) 
        VALUES (%s, %s, %s)"""

        db.mycursor.execute(sql, (id, name, photos))
        db.mydb.commit()

    def getPhotos(self):
        sql = """
        SELECT usuario.id AS usuario_id, pessoa.id AS pessoa_id, 
            pessoa.nome_pessoa, pessoa.fotos 
        FROM pessoa 
        JOIN usuario_pessoa ON pessoa.id = usuario_pessoa.pessoa_id 
        JOIN usuario ON usuario.id = usuario_pessoa.usuario_id
        """
        db.mycursor.execute(sql)
        res = db.mycursor.fetchall()
        return res
