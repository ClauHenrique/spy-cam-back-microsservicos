from database.conection import BD

bd = BD()

def create_tables():
    print("CRIANDO TABELAS...")

    usuario = """
        CREATE TABLE IF NOT EXISTS usuario (
        id INT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL
    )
    """

    bd.mycursor.execute(usuario)


    pessoa = """
        CREATE TABLE IF NOT EXISTS pessoa (
        id INT PRIMARY KEY,
        nome_pessoa VARCHAR(255),
        fotos TEXT
    )
    """

    bd.mycursor.execute(pessoa)

    usuario_pessoa = """
        CREATE TABLE IF NOT EXISTS usuario_pessoa (
        id PRIMARY KEY,
        usuario_id INT,
        pessoa_id INT,
        FOREIGN KEY (usuario_id) REFERENCES usuario(id),
        FOREIGN KEY (pessoa_id) REFERENCES pessoa(id)
    )
    """

    bd.mycursor.execute(usuario_pessoa)

    registro = """
        CREATE TABLE IF NOT EXISTS registro (
        id INT AUTO_INCREMENT PRIMARY KEY,
        mensagem VARCHAR(255),
        enviado TINYINT(1),
        pessoa_id INT,
        createdAt DATETIME NOT NULL,
        updatedAt DATETIME NOT NULL,
        FOREIGN KEY (pessoa_id) REFERENCES pessoa(id)
    )
    """

    bd.mycursor.execute(registro)

    # Fechando o cursor e a conexão
    bd.mycursor.close()
    bd.mydb.close()

    print("TABELAS CRIADAS")

def table_not_exists():
    sql = "SHOW TABLES"
    bd.mycursor.execute(sql)

    tables = bd.mycursor.fetchall()

    return len(tables) <= 0

