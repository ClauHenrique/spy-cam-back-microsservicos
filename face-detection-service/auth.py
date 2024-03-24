import requests
from dotenv import load_dotenv
import os

class Auth:
    id_cam = None
    load_dotenv()
    api_url = os.getenv('MAIN_API')

    @classmethod
    def login(cls, email, password):
        
        
        body = {
            "email": email,
            "senha": password
        }
    
        response = requests.post(f"{cls.api_url}/auth/login-car", json=body)
        cls.id_cam = response.json()
    
    
    @classmethod
    def get_id(cls):
        return cls.id_cam["id_camera"]
