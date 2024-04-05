import { Module } from '@nestjs/common';
// import { connect } from 'amqp-connection-manager';
import { RabbitmqService } from './rabbitmq.service';


@Module({
  providers: [
    RabbitmqService
  ],
  exports: [RabbitmqService],
})
export class RabbitmqModule {}
