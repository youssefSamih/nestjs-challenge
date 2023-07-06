import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProductionHostController } from '../../production-host/production-host.controller';
import { ConfigService } from '../../config/config.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ProductionHostController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
