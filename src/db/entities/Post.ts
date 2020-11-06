import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

// TODO: add likes with transactions.

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  isPublished: boolean;
  @Column({ length: 256 })
  title: string;
  @Column('text')
  description: string;
  @Column('text')
  content: string;
  @ManyToOne(() => User, (user) => user.posts)
  author: User;
}
