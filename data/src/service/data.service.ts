import { Injectable } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Injectable()
export class DataService {
  constructor(private readonly rabbitMQService: TelegramService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async sendMessageToQueue(message: string) {
    //await this.rabbitMQService.sendMessageToQueue(message);
  }
}
