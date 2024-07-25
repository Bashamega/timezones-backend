import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Timezone } from './entities/timezones.entity';

@Injectable()
export class TimezonesService {
  constructor(
    @InjectRepository(Timezone)
    private readonly timezoneRepository: Repository<Timezone>,
  ) {}

  async create(timezone: Timezone): Promise<Timezone> {
    return await this.timezoneRepository.save(timezone);
  }

  async findAll(): Promise<Timezone[]> {
    return await this.timezoneRepository.find();
  }

  async findOne(discordUserID: number): Promise<Timezone> {
    const timezone = await this.timezoneRepository.findOneBy({ discordUserID });
    if (!timezone) {
      throw new NotFoundException(`Timezone with discordUserID ${discordUserID} not found`);
    }
    return timezone;
  }

  async update(discordUserID: number, updateTimezoneDto: Partial<Timezone>): Promise<Timezone> {
    await this.timezoneRepository.update(discordUserID, updateTimezoneDto);
    return this.findOne(discordUserID);
  }
}