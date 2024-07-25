import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Timezone {
  @PrimaryGeneratedColumn()
  discordUserID: number;

  @Column()
  timezone: string;
}
