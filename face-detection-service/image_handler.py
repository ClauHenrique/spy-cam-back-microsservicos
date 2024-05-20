from datetime import datetime
import cv2
import os

class ImageHandler:
    """
    Esta classe e responsavel por verificar a integridade da imagem, bem como
    verificar se o rosto detectado está legivel para o reconhecimento facial
    """

    def save_image(self, frame):

        output_dir = "./images/"
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        filename = datetime.now().strftime("%H:%M:%S") + ".jpg"
        filepath = output_dir + filename
        cv2.imwrite(filepath, frame)

        # vou salvar uma copia dessas imagens num cunjunto de dados para que eu possa demonstrar meus testes
        path_df = './df_pessoas_detectadas/' + filename
        cv2.imwrite(path_df, frame)
    

    def delete_images(self):
        directory = "./images/"
        # Verifique se o diretório existe
        if os.path.exists(directory):
            files = os.listdir(directory)

            for file in files:
                if file.endswith(".jpg") or file.endswith(".png"):

                    file_path = os.path.join(directory, file)
    
                    os.remove(file_path)

