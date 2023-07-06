import { Controller, Get, UseInterceptors } from '@nestjs/common';

import { ConfigService } from '../config/config.service';
import { OnRunningHeaderInterceptor } from '../interceptors/on-running-header.interceptor';

@Controller()
@UseInterceptors(new OnRunningHeaderInterceptor())
export class ProductionHostController {
  constructor(private readonly configService: ConfigService) {}

  @Get('getProductionHost')
  getProductionHost(): string {
    return this.configService.getProductionHost();
  }
}
