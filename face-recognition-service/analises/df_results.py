import pandas as pd
import os
from datetime import datetime

class Results:
    def __init__(self):
        pass
       

    def create_results_df(self, res_obt, res_esp, time):
        try:
            # tempo atual
            current_time = datetime.now()

            time_str = current_time.strftime('%Y-%m-%d') + ' ' + time

            # converter a string em um objeto datetime
            hora_datetime = datetime.strptime(time_str, '%Y-%m-%d %H:%M:%S')

            # verificar quanto tempo se passou desde o momento da detecção até a hora atual
            elapsed_time = current_time - hora_datetime
            elapsed_minutes = elapsed_time.total_seconds() / 60

            data = {
            "resultado_obtido": [],
            "resultado_esperado": [],
            "tempo_processamento": []
            }


            data["resultado_obtido"].append(res_obt)
            data["resultado_esperado"].append(res_esp)
            data["tempo_processamento"].append(elapsed_minutes)
        
            self.create_csv_file(data)
            
        except:
            print("erro ao tentar criar o data frame")
        
    def create_csv_file(self, data):
        try:

            # criar um novo data frame apenas se não existir um | caso seja a primeira analise
            if not os.path.exists("./analises/results.csv"):
                df = pd.DataFrame(data)
                df.to_csv('./analises/results.csv', index=False)

                return
            
            old_df = pd.read_csv('./analises/results.csv')
            
            new_df = pd.DataFrame(data)

            df_concatenado = pd.concat([new_df, old_df], axis=0)

            # df atualizado
            df_concatenado.to_csv('./analises/results.csv', index=False)

        except:
            print("erro ao tentar salvar arquivo")