import requests
import os
from dotenv import load_dotenv
from auth import Auth

class ImageSender:
    """
    Classe responsável por enviar imagem para o servidor.
    """

    def __init__(self):
        load_dotenv()
        self.api_url = os.getenv('API_FACE_RECOGNITION')
        self.response = 0
        self.waiting = False
  
    def get_img(self):
        # Obtém a primeira imagem do diretório
        return os.listdir("./images/")[0]


    def send(self, detection_time):
        # Obtém o caminho da imagem
        path = "./images/" + self.get_img()
        img_name = os.path.basename(path)

        # Abre o arquivo da imagem em modo binário
        with open(path, 'rb') as file:
            file_data = file.read()
        
        # dados do formulário
            
        files = {
            'imagem': (img_name, file_data),
        }

        id_user =  Auth().get_id()

        time_str = detection_time.strftime('%H:%M:%S')
        print("HORA DO ENVIO: ", time_str)

        self.waiting = True
        # Envia a solicitação POST com a imagem
        response = requests.post(
            f"{self.api_url}/car/detectface?id_user={id_user}&detection_time={time_str}", files=files
            )
        self.response = response.status_code
        self.waiting = False