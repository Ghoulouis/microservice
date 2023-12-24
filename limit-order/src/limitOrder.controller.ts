import { Controller, Get } from '@nestjs/common';
import { LimitOrderService } from './limitOrder.service';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: LimitOrderService) {}

  @MessagePattern({ cmd: 'first message' })
  handleNotifications(data: any) {
    console.log('Received notification:', data);
    // Xử lý dữ liệu nhận được ở đây
  }
}
