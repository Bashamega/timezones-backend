import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimezonesController } from './timezones/timezones.controller';

@Module({
  imports: [],
  controllers: [AppController, TimezonesController],
  providers: [AppService],
})
export class AppModule {}
