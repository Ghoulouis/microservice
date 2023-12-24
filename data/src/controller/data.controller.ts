import { Controller, Get } from '@nestjs/common';
import { DataService } from '../service/data.service';
import { TelegramService } from '../service/telegram.service';
import { LimitOrderService } from '../service/limitOrder.service';
import { TokenService } from 'src/service/token.service';
import { Web3Serivce } from 'src/service/web3.service';

@Controller()
export class DataController {
  constructor(
    private readonly dataService: DataService,
    private readonly telegramService: TelegramService,
    private readonly limitOrderService: LimitOrderService,
    private readonly tokenService: TokenService,
    private readonly web3Service: Web3Serivce,
  ) {
    this.fetchPriceToken();
  }

  async fetchPriceToken() {
    this.web3Service.getPoolInfo();
  }
}
