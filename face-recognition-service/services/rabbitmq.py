import pika
import json

def send_notifi_rabbitmq(id_person, id_user, msg):
    credentials = pika.PlainCredentials('admin', 'admin')
    parameters = pika.ConnectionParameters(host='localhost', credentials=credentials)

    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()

    channel.exchange_declare(exchange='notificacoes_ex', exchange_type='direct')

    channel.queue_declare(queue='notifications', durable=True)

    channel.queue_bind(exchange='notificacoes_ex', queue='notifications', routing_key='notifications')

    message = {
        'msg': msg,
        'id_person': id_person,
        'id_user': id_user
    }

    msg_json = json.dumps(message)

    channel.basic_publish(
        exchange='notificacoes_ex',
        routing_key='notifications',
        body=msg_json,
        properties=pika.BasicProperties(
            delivery_mode=2  # Marca a mensagem como persistente
        )
    )
    # if not req:
    #      raise ValueError("Erro ao enviar mensagem ao rabbitmq")

    connection.close()
