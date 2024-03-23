from flask import Blueprint, request
import os
from services.recognition_service import Recognition
from services.rm_images_car import delete_images_car

def configure_car_routes(app):
    car_route = Blueprint('car_routes', __name__)

    @car_route.route('/detectface', methods=['POST'])
    def get_face():
        try:
            # Verifica se a imagem está presente nos dados da solicitação
            if 'imagem' not in request.files:
                return 'Nenhuma imagem enviada', 400

            imagem_binaria = request.files['imagem'].read()

            filename = request.files['imagem'].filename

            with open(os.path.join(app.config['UPLOAD_FOLDERS'][0], filename), 'wb') as f:
                f.write(imagem_binaria)


            Recognition().recognize_images()

            delete_images_car()

            return 'Imagem recebida e salva com sucesso', 200
        
        except Exception as e:
            print(e)
            return 'Erro interno do servidor', 500

    app.register_blueprint(car_route, url_prefix='/car')
