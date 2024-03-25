import requests
from dotenv import load_dotenv
import os

class Auth:
    id_user = None
    load_dotenv()
    api_url = os.getenv('MAIN_API')

    @classmethod
    def login(cls, email, password):
        
        
        body = {
            "email": email,
            "senha": password
        }
    
        response = requests.post(f"{cls.api_url}/auth/login-car", json=body)

        if response.status_code == 401:
            raise ValueError("Login incorreto")
        
        elif response.status_code == 500:
            raise ValueError("Erro no servidor")

        cls.id_user = response.json()
    
    
    @classmethod
    def get_id(cls):
        return cls.id_user["id_usuario"]
