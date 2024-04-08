export declare class RabbitmqService {
    dataRabbitmq: {
        data: any[];
    };
    id_user: number;
    ConsumeMessageRabbitmq(): Promise<unknown>;
    getMessages(id_user: number): Promise<{
        data: any[];
    }>;
}
