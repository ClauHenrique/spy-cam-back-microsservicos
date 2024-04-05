export declare class RabbitmqService {
    dataRabbitmq: {
        data: any[];
    };
    ConsumeMessageRabbitmq(id_usuario: number): Promise<unknown>;
    getMessages(): any;
}
