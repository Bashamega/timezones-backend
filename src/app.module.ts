import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimezonesController } from './timezones/timezones.controller';
import { TimezonesService } from './timezones/timezones.service';

@Module({
  imports: [],
  controllers: [AppController, TimezonesController],
  providers: [AppService, TimezonesService],
})
export class AppModule {}
