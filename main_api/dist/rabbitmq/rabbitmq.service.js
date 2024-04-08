"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitmqService = void 0;
const common_1 = require("@nestjs/common");
const amqp = require('amqplib/callback_api');
let RabbitmqService = class RabbitmqService {
    constructor() {
        this.dataRabbitmq = {
            data: []
        };
        this.id_user = 0;
    }
    async ConsumeMessageRabbitmq() {
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
                        if (data.id_user == this.id_user) {
                            console.log("esse");
                            this.id_user = 0;
                            console.log(" [x] Received %s", data);
                            channel.ack(msg);
                            this.dataRabbitmq.data.push(data);
                        }
                    }, {
                        noAck: false
                    });
                });
            });
        });
    }
    async getMessages(id_user) {
        this.id_user = id_user;
        console.log(this.id_user);
        const data = {
            data: this.dataRabbitmq.data.slice()
        };
        if (data.data.length > 0) {
            this.dataRabbitmq.data = [];
        }
        return data;
    }
};
RabbitmqService = __decorate([
    (0, common_1.Injectable)()
], RabbitmqService);
exports.RabbitmqService = RabbitmqService;
//# sourceMappingURL=rabbitmq.service.js.map