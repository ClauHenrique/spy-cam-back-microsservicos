from flask import Blueprint, request
import os
from database.user import User
from database.persons import Person

def configure_server_routes(app):
    server_route = Blueprint('server_routes', __name__)

    @server_route.route('/create-user', methods=['POST'])
    def create_user():
        try:

            data = request.json
            User().create_user(data["id"], data["name"])

            return 'usuario cadastrado', 201
        
        except Exception as e:
            print(e)
            return 'Erro interno do servidor', 500
    

    @server_route.route('/create-person', methods=['POST'])
    def create_person():
        try:
            imagem_binaria = request.files['photo'].read()

            filename = request.files['photo'].filename

            with open(os.path.join(app.config['UPLOAD_FOLDERS'][1], filename), 'wb') as f:
                f.write(imagem_binaria)

            # Person().create_person(data["id"], data["name"], filename)

            return 'pessoa cadastrada', 201
        
        except Exception as e:
            print(e)
            return 'Erro interno do servidor', 500


    @server_route.route('/create-user-person', methods=['POST'])
    def create_user_person():
        try:

            data = request.json
            Person().create_user_person(data["id"], data["id_user"], data["id_person"])

            return 'dados inseridos na tabela usuario pessoa', 201
        
        except Exception as e:
            print(e)
            return 'Erro interno do servidor', 500


    app.register_blueprint(server_route, url_prefix='/server')
