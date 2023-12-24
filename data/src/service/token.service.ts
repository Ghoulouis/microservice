import { Injectable } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Injectable()
export class TokenService {
  private tokens: Token[] = [];
  constructor() {}

  addToken(token: Token) {
    this.tokens = [...this.tokens, token];
  }

  getPriceTokens() {}
}
