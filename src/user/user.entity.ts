import { Column, Entity, IsNull, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_ids: number;

  @Column()
  names: string;

  @Column()
  address: string;

  @Column()
  old: number;

  @Column({ nullable: true })
  job: string;

  @Column({ nullable: true })
  introduce: string;
}
