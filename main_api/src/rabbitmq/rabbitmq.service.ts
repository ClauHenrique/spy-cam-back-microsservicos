import { Injectable } from '@nestjs/common';
const amqp = require('amqplib/callback_api');

@Injectable()
export class RabbitmqService {

  dataRabbitmq = {
    data: []
  }

  async ConsumeMessageRabbitmq(id_usuario: number) {
    

    return new Promise((resolve, reject) => {
      amqp.connect('amqp://admin:admin@localhost', (error0, connection) => {
        if (error0) {
          reject(error0);
          return;
        }
        connection.createChannel((error1, channel) => {
          if (error1) {
            reject(error1);
            return;
          }
          const queue = 'notifications';

          channel.assertQueue(queue, {
            durable: true
          });

          console.log(" [*] Waiting for messages...", queue);

          channel.consume(queue, (msg) => {
            const content = msg.content.toString();
            const data = JSON.parse(content);

            if (data.id_user == id_usuario) {
              console.log(" [x] Received %s", data);
              
              // remover da fila
              channel.ack(msg);
              
              // resolve(data); // return
              this.dataRabbitmq.data.push(data)
            }
          }, {
            noAck: false // nao remover automaticamente
          });
        });
      });
    });
  }

  getMessages(): any {
    const data = {
      data: this.dataRabbitmq.data.slice()
    }

    if (data.data.length > 0) {
      this.dataRabbitmq.data = []
    }
    return data 

  }
      
}
