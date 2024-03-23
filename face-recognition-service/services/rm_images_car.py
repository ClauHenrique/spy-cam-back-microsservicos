import os 

def delete_images_car():
    directory = "./upload_car/"
    # Verifique se o diretório existe
    if os.path.exists(directory):
        files = os.listdir(directory)

        for file in files:
            if file.endswith(".jpg") or file.endswith(".png") or file.endswith(".jpeg"):

                file_path = os.path.join(directory, file)

                os.remove(file_path)