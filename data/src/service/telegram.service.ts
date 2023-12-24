import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import * as amqp from 'amqplib';

@Injectable()
export class TelegramService {
  constructor(
    @Inject('TELEGRAM_SERVICE') private readonly client: ClientProxy,
  ) {
    this.send();
  }
  async send() {
    const result = await this.client.send({ cmd: 'first message' }, {});
    await result.subscribe();
  }

  // private connection: amqp.Connection;
  // private channel: amqp.Channel;
  // constructor() {
  //   this.connectToRabbitMQ();
  // }
  // async connectToRabbitMQ() {
  //   try {
  //     this.connection = await amqp.connect('amqp://localhost');
  //     this.channel = await this.connection.createChannel();
  //     await this.channel.assertQueue('telegram_queue', { durable: true });
  //     console.log('Connected to RabbitMQ');
  //   } catch (error) {
  //     console.error('Error connecting to RabbitMQ:', error);
  //   }
  // }
  // async sendMessageToQueue(message: string) {
  //   try {
  //     this.channel.sendToQueue('telegram_queue', Buffer.from(message));
  //     console.log('Message sent to RabbitMQ');
  //   } catch (error) {
  //     console.error('Error sending message to RabbitMQ:', error);
  //   }
  // }
}
