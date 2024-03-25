from database.connection import db

class Register:
    
    def create_register_known(self, msg, id_person, id_user):
        sql = """INSERT INTO registro 
        (mensagem, pessoa_id, usuario_id, createdAt, updatedAt) 
        VALUES (%s, %s, %s, NOW(), NOW())"""

        db.mycursor.execute(sql, (msg, id_person, id_user))
        db.mydb.commit()

    
    def create_register_unknown(self, msg, id_user):
        sql = """INSERT INTO registro 
        (mensagem, usuario_id, createdAt, updatedAt) 
        VALUES (%s, %s, NOW(), NOW())"""

        db.mycursor.execute(sql, (msg, id_user))
        db.mydb.commit()
    
    def last_register(self):
        sql = """
            SELECT pessoa_id, createdAt FROM registro ORDER BY id DESC LIMIT 1
        """
        db.mycursor.execute(sql)
        res = db.mycursor.fetchall()
        return res
