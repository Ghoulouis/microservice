import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import * as amqp from 'amqplib';

@Injectable()
export class LimitOrderService {
  constructor(
    @Inject('LIMIT_ORDER_SERVICE') private readonly client: ClientProxy,
  ) {
    this.send();
  }
  async send() {
    const result = await this.client.send({ cmd: 'first message' }, {});
    await result.subscribe();
  }
}
