import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimezonesController } from './timezones/timezones.controller';
import { TimezonesService } from './timezones/timezones.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type:'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true,
      synchronize: true
    }
  )],
  controllers: [AppController, TimezonesController],
  providers: [AppService, TimezonesService],
})
export class AppModule {}
