from flask import Blueprint, request
from database.conection import BD

def configure_server_routes(app):
    server_route = Blueprint('server_routes', __name__)

    @server_route.route('/create-user', methods=['POST'])
    def create_user():
        try:

            data = request.json
            BD().insert_user(data["id"], data["name"])

            return 'usuario cadastrado', 201
        
        except Exception as e:
            print(e)
            return 'Erro interno do servidor', 500

    app.register_blueprint(server_route, url_prefix='/server')
