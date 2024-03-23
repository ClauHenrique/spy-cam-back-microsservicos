from database.connection import db

def create_tables():
    print("CRIANDO TABELAS...")

    usuario = """
        CREATE TABLE IF NOT EXISTS usuario (
        id INT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL
    )
    """

    db.mycursor.execute(usuario)

    pessoa = """
        CREATE TABLE IF NOT EXISTS pessoa (
        id INT PRIMARY KEY,
        nome_pessoa VARCHAR(255),
        fotos TEXT
    )
    """

    db.mycursor.execute(pessoa)

    usuario_pessoa = """
        CREATE TABLE IF NOT EXISTS usuario_pessoa (
        id INT PRIMARY KEY,
        usuario_id INT,
        pessoa_id INT,
        FOREIGN KEY (usuario_id) REFERENCES usuario(id),
        FOREIGN KEY (pessoa_id) REFERENCES pessoa(id)
    )
    """

    db.mycursor.execute(usuario_pessoa)

    registro = """
        CREATE TABLE IF NOT EXISTS registro (
        id INT AUTO_INCREMENT PRIMARY KEY,
        mensagem VARCHAR(255),
        pessoa_id INT,
        usuario_id INT,
        createdAt DATETIME NOT NULL,
        updatedAt DATETIME NOT NULL,
        FOREIGN KEY (pessoa_id) REFERENCES pessoa(id),
        FOREIGN KEY (usuario_id) REFERENCES usuario(id)
    )
    """
    db.mycursor.execute(registro)

    camera = """
        CREATE TABLE IF NOT EXISTS camera (
        id INT AUTO_INCREMENT PRIMARY KEY,
        usuario_id INT,
        FOREIGN KEY (usuario_id) REFERENCES usuario(id)
    )
    """
    db.mycursor.execute(camera)

    print("TABELAS CRIADAS!")


def table_not_exists():
    sql = "SHOW TABLES"
    db.mycursor.execute(sql)

    tables = db.mycursor.fetchall()

    return len(tables) <= 0
