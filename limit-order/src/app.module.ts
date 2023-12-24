import { Module } from '@nestjs/common';
import { AppController } from './limitOrder.controller';
import { LimitOrderService } from './limitOrder.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [LimitOrderService],
})
export class AppModule {}
