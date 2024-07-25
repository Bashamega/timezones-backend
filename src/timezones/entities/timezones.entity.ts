import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tasks-db')
export class Task {
  @PrimaryColumn()
  userID: number;
  timezone: string;

  constructor(userId: number, timezones: string) {
    this.userID = userId;
    this.timezone = timezones;

  }
}
