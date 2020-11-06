import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// TODO: add likes with transactions.

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  isPublished: boolean;
  @Column({ length: 256 })
  title: string;
  @Column('text')
  description: string;
  @Column('text')
  content: string;
}
