from image_handler import ImageHandler
from image_sender import ImageSender
from datetime import datetime
import threading

class OperationManager:
    """
    esta classe e responsavel por gerenciar os metodos que devem ser executados
    verificando os processos que estao em execuçao e bloquear processos que
    nao devem ser executados
    """
    def __init__(self):
        self.save_img = True
        self.send_img = True
        self.detection_time = datetime.now()
        self.ignore_time = True # variavel de contole - executar operacao antes do praso estabelecido
        self.img_sender = ImageSender()


    def save_image(self, img):
        try:
            if self.save_img == True or self.ignore_time == True:
                """
                so salvar novas imagens apos terminar o reconhecimento facial ou 
                chegar um novo individuo ou terminar o tempo de espera para nova execução (10 min)
                """
                self.save_img = False
                print("salva")
                ImageHandler().save_image(img)

        except:
            print("Erro ao tentar salvar imagem")


    def manage_requests(self):
        try:
            if self.send_img == True or self.ignore_time == True:
                """
                nao permitir que novas requisicoes sejam envidas ate que esta obtenha resposta
                """

                print("enviar imagem para o servidor!")
                
                self.send_img = False
                self.ignore_time = False
                self.detection_time = datetime.now() # inicio da contagem de tempo da ultima requisicao enviada

                threading.Thread(target=self.img_sender.send).start()
            
            if self.img_sender.response == 200:
                
                ImageHandler().delete_images()
                self.img_sender.response = 0

            if self.img_sender.response == 500:
                """
                ouve algum erro no servidor ao tentar processar a imagem.
                enviar novamente
                """
                self.manage_requests(self)
            
        except:
            print("erro!!")
    
    def countTime(self):
        # verificar se ja se passaram os 10 minutos pra poder enviar novas requisicoes

        current_time = datetime.now()
        elapsed_time = current_time - self.detection_time

        elapsed_minutes = elapsed_time.total_seconds() / 60

        if elapsed_minutes >= 10:
            self.unlock()

    def unlock(self):
        # permitir que todas as operacoes possam ser executadas
        # reiniciar tudo
        self.save_img = True
        self.send_img = True
        self.ignore_time = True
        self.img_sender.response = 0
