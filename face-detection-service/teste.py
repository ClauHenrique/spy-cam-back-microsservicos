
from operations_manager import OperationManager
from image_sender import ImageSender
import os

# maneger = OperationManager()
# sd = ImageSender()
# sd.send()


def get_img():
    # Obtém a primeira imagem do diretório
    return os.listdir("./images/")[0]


print(get_img())

# maneger.countTime()