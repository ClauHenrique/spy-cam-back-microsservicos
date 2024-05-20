import pandas as pd
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
    
    def get_persons(self, id_user):
        self.mydb.commit()
        
        sql = f"""
        select nome_pessoa, fotos from pessoa 
        join usuario_pessoa on pessoa.id = usuario_pessoa.pessoa_id 
        where usuario_pessoa.usuario_id = {id_user}
        """
        self.mycursor.execute(sql)
        res = self.mycursor.fetchall()
        return res

# criar dataFrame
data = {
    "nome_pessoa": [],
    "foto": []
}

# importar dados do banco
db = DB()
pers = db.get_persons(3)

# [(nome_pessoa, foto), (nome_pessoa, foto)...]
for p in pers:
    data["nome_pessoa"].append(p[0])
    data["foto"].append(p[1])


df = pd.DataFrame(data)
df.to_csv('./analises/pessoas_autorizadas.csv', index=False)

print(df)