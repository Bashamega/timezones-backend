import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { TimezonesService } from './timezones.service';
import { Timezone } from './entities/timezones.entity';

@Controller('timezones')
export class TimezonesController {
  constructor(private readonly timezonesService: TimezonesService) {}

  @Post()
  create(@Body() timezone: Timezone): Promise<Timezone> {
    return this.timezonesService.create(timezone);
  }

  @Get()
  findAll(): Promise<Timezone[]> {
    return this.timezonesService.findAll();
  }

  @Get(':discordUserID')
  findOne(@Param('discordUserID') discordUserID: number): Promise<Timezone> {
    return this.timezonesService.findOne(discordUserID);
  }

  @Put(':discordUserID')
  update(
    @Param('discordUserID') discordUserID: number,
    @Body() updateTimezoneDto: Partial<Timezone>,
  ): Promise<Timezone> {
    return this.timezonesService.update(discordUserID, updateTimezoneDto);
  }
}
