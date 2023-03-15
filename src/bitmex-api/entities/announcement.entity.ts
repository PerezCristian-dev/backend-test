import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Announcement {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  id: number;

  @Column()
  link: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  date: string;
}


export default Announcement; 