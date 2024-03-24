#!/usr/bin/python3
import cv2
import time
from auth import Auth

print("FAÇA LOGIN COM SUA CONTA ANTES DE PROSEGUIR!\n")

email = str(input("seu email: "))
password = str(input("sua senha: "))

Auth().login(email, password)

from operations_manager import OperationManager

maneger = OperationManager()

haar_cascade_xml = 'haarcascade_frontalface_alt2.xml'

faceClassifier = cv2.CascadeClassifier(haar_cascade_xml)

# # iniciar a camera
capture = cv2.VideoCapture(0)
capture.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
capture.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

while not cv2.waitKey(20) & 0xFF == ord('q'):
    try:

        ret, frame = capture.read()

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        face = faceClassifier.detectMultiScale(gray)

        face_capture = []

        #criar retangulo que detecta rosto
        for x, y, w, h in face:
            face_capture = cv2.rectangle(frame, (x, y), (x + w, y + h), (0,0,255), 2)

        # so salvamos a imagem se ela conter um rosto
        if len(face_capture) > 0:
            maneger.countTime()
            maneger.save_image(frame)
            maneger.manage_requests()
        
        else:
            maneger.unlock()

        # cv2.imshow('gray', gray)
        cv2.imshow('color', frame)

    except:
        print("erro")
        break

capture.release()
cv2.destroyAllWindows()