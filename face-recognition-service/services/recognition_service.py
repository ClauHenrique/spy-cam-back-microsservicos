# funcao que faz o reconhecimento dos rostos
import face_recognition as fr
import cv2
from database.persons import Person
from database.register import Register
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

        print(img_car)

        persons_db = Person().getPhotos() # [(usuario_id, pessoa_id, nome_pessoa, imagem.jpg)...]

        if len(persons_db) <= 0:
            print("sem pessoas cadastradas no banco")
            return False


        last_notification = Register().last_register() # retorna a ultima notificação


        i = 0
        authorized_persons = 0 # verificar se alguma pessoa autorizada foi detectada

        print(persons_db)

        while i < len(persons_db):
            img_person = persons_db[i][3]
            path_img_person = "./upload_server/" + img_person
            path_img_car = "./upload_car/" + img_car

            print(f"""
                cadsatrado: {persons_db[i]}
                        VS
                frtectado: {img_car}
            """)

            result = self.recognition(path_img_person, path_img_car)

            print(f"""
                cadsatrado: {persons_db[i]}
                        VS
                frtectado: {img_car}
            """)

            print("result: ", result)

            if result == True:

                authorized_persons += 1

                if len(last_notification) <= 0: # se for o primeiro registro
                    print("primeiro")
                    Register().create_register_known(
                        f"{persons_db[i][2]} entrou no carro", # nome
                        persons_db[i][1], # id da pessoa
                        persons_db[i][0]) # id do usuario
                    
                    break
                
                elif last_notification[0][0] == persons_db[i][1]: # se a ultima notificacao for a da mesma pessoa
                    print("esta pessoa apos os 10")
                    if countTime(10, last_notification[0][1]):

                        Register().create_register_known(
                             f"{persons_db[i][2]} entrou no carro", # nome
                             persons_db[i][1], # id da pessoa
                             persons_db[i][0]) # id do usuario
                        
                        break
                
                else:
                     print("primeiro desta pessoa")
                     Register().create_register_known(
                        f"{persons_db[i][2]} entrou no carro", # nome
                        persons_db[i][1], # id da pessoa
                        persons_db[i][0]
                    )
                     break

            i += 1
        
        
        if authorized_persons == 0: # se nenhuma pessoa autorizada tiver sido detectada
              
            if len(last_notification) <= 0: # se for o primeiro registro
                print("primeiro desconhecido")
                Register().create_register_unknown(
                            "pessoa desconhecida entrou no carro"
                    )
        
            elif last_notification[0][0] == None:
                if countTime(10, last_notification[0][1]):
                    print("desconhecido apos os 10")
                    Register().create_register_unknown(
                        "pessoa desconhecida entrou no carro"
                    )
            
            else:
                 print("novo desconhecido")
                 Register().create_register_unknown(
                        "pessoa desconhecida entrou no carro"
                    )

        
    

