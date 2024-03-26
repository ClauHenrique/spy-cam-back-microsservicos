from routes.car_routes import configure_car_routes
from routes.server_routes import configure_server_routes
import os
from services.rabbitmq import send_notification

def configure_all(app):
    config_upload(app)
    configure_car_routes(app)
    configure_server_routes(app)
    send_notification()


def config_upload(app):
    upload_folders = ['./upload_car', './upload_server']

    for folder in upload_folders:
        if not os.path.exists(folder):
            os.makedirs(folder)

    app.config['UPLOAD_FOLDERS'] = upload_folders
