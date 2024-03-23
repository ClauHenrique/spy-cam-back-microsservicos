from routes.car_routes import configure_car_routes
import os

def configure_all(app):
    config_upload(app)
    configure_car_routes(app)


def configure_db():
    pass

def config_upload(app):
    upload_folders = ['./upload_car', './upload_server']

    for folder in upload_folders:
        if not os.path.exists(folder):
            os.makedirs(folder)

    app.config['UPLOAD_FOLDERS'] = upload_folders
