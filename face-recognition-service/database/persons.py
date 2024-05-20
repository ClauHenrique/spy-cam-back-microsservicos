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

    def getPhotos(self, id_user):
        db.mydb.commit()
        
        sql = f"""
        SELECT usuario.id AS usuario_id, pessoa.id AS pessoa_id, 
            pessoa.nome_pessoa, pessoa.fotos 
        FROM pessoa 
        JOIN usuario_pessoa ON pessoa.id = usuario_pessoa.pessoa_id 
        JOIN usuario ON usuario.id = usuario_pessoa.usuario_id WHERE usuario.id = {id_user}
        """
        db.mycursor.execute(sql)
        res = db.mycursor.fetchall()
        return res
    
    def get_persons(self, id_user):
        db.mydb.commit()
        
        sql = f"""
        select nome_pessoa, fotos from pessoa 
        join usuario_pessoa on pessoa.id = usuario_pessoa.pessoa_id 
        where usuario_pessoa.usuario_id = 3 = {id_user}
        """
        db.mycursor.execute(sql)
        res = db.mycursor.fetchall()
        return res
