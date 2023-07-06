import { Controller, Get, UseInterceptors } from '@nestjs/common';

import { AppService } from './app.service';
import { OnRunningHeaderInterceptor } from '../../interceptors/on-running-header.interceptor';

@Controller()
@UseInterceptors(new OnRunningHeaderInterceptor())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
