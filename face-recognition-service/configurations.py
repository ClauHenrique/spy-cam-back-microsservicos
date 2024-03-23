from routes.car_routes import configure_car_routes
from routes.server_routes import configure_server_routes
import os
from database.models.tables import table_not_exists, create_tables

def configure_all(app):
    config_upload(app)
    configure_car_routes(app)
    configure_server_routes(app)
    configure_db()


def configure_db():
    if table_not_exists():
        create_tables()

def config_upload(app):
    upload_folders = ['./upload_car', './upload_server']

    for folder in upload_folders:
        if not os.path.exists(folder):
            os.makedirs(folder)

    app.config['UPLOAD_FOLDERS'] = upload_folders
