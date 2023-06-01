import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  user_ids: number;

  @Expose()
  names: string;

  @Expose()
  address: string;

  @Expose()
  old: number;

  @Expose()
  job: string;

  @Expose()
  introduce: string;
}
