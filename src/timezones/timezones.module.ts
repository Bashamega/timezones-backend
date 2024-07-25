import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimezonesService } from './timezones.service';
import { TimezonesController } from './timezones.controller';
import { Timezone } from './entities/timezones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Timezone])],
  controllers: [TimezonesController],
  providers: [TimezonesService],
})
export class TimezonesModule {}
