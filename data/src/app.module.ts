import { Module } from '@nestjs/common';
import { DataController } from './controller/data.controller';
import { DataService } from './service/data.service';
import { TelegramService } from './service/telegram.service';
import { LimitOrderService } from './service/limitOrder.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TokenService } from './service/token.service';
import { Web3Serivce } from './service/web3.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LIMIT_ORDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'limit_order_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'TELEGRAM_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'telegram_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [DataController],
  providers: [
    DataService,
    TelegramService,
    LimitOrderService,
    TokenService,
    Web3Serivce,
  ],
})
export class AppModule {}
