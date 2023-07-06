import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly prodHost: string = process.env.PROD_HOST;

  getProductionHost(): string {
    return this.prodHost;
  }
}
