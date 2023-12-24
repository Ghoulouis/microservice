import { Injectable } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Injectable()
export class LimitOrderService {
  getHello(): string {
    return 'Hello World!';
  }

  @MessagePattern('notifications')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    console.log(context.getChannelRef());
  }
}
