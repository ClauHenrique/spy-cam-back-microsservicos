# funcao que faz o reconhecimento dos rostos
import face_recognition as fr
import cv2
from database.persons import get_pessoas, ultima_notificacao
import os
from services.count_time import countTime

class Recognition:

    def recognition(self, pessoa_conhecida: str, img_camera: str):
        try:
           
            # imagem do banco
            img_pessoa = fr.load_image_file(pessoa_conhecida)
            # imgClaudio = cv2.cvtColor(imgClaudio, cv2.COLOR_BGR2RGB)

            # a foto capturada pela camera
            img_cam = fr.load_image_file(img_camera)
            # imgCamera = cv2.cvtColor(imgCamera, cv2.COLOR_BGR2RGB)

            # retorna as codernadas do rosto
            localizar_rosto = fr.face_locations(img_pessoa)[0]
            cv2.rectangle(img_pessoa, (localizar_rosto[3], localizar_rosto[0], localizar_rosto[1], localizar_rosto[2]), (0, 255, 0), 2)

            # pegar pontos de indentificação na imagem
            encode_img_pessoa = fr.face_encodings(img_pessoa)[0]  
          
            encode_img_camera = fr.face_encodings(img_cam)[0]

            compare = fr.compare_faces([encode_img_pessoa], encode_img_camera)
            return compare[0]

        except:
            raise ValueError("Erro ao processar imagem")
    

    def recognize_images(self):
        img_car = os.listdir("./upload_car/")[0]

        persons_db = get_pessoas()
        last_notification = ultima_notificacao() # retorna a ultima notificação

        i = 0
        authorized_persons = 0 # verificar se alguma pessoa autorizada foi detectada

        while i < len(persons_db):
            img_person = persons_db[i]["path"]
            path_img_person = "./upload_server/" + img_person
            path_img_car = "./upload_car/" + img_car


            # print("analisando ", persons_db[i]["name"])
            # print("analisando ", path_img_person)
            # print("analisando ", path_img_car)

            result = self.recognition(path_img_person, path_img_car)

            print(result)

            if result == True:

                authorized_persons += 1
                
                if last_notification[0]["id"] == persons_db[i]["id"]:

                    if countTime(10, last_notification[0]["createdAt"]):
                        print("enviar notificacao - conhecido de novo")
                        break
                
                else:
                     print("enviar notificacao - novo conhecido")
                     break

            i += 1
        
        if authorized_persons == 0: # se nenhuma pessoa autorizada tiver sido detectada
            if last_notification[0]["id"] == None:
                if countTime(10, last_notification[0]["createdAt"]):
                    print("notificacao - desconhecido de novo!!")
            
            else:
                print("notificacao - novo desconhecido!!!")

        
    

