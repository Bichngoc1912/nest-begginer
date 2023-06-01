import { Get, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { FindOptionsWhere, In, Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserServices {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async save(userDto: UserDto): Promise<UserDto> {
    const saveUser = await this.userRepository.save(userDto);
    return plainToInstance(UserDto, saveUser);
  }

  async update(id: string, userDto: UserDto): Promise<{ result: string }> {
    await this.userRepository.update(id, userDto);
    return {
      result: 'success',
    };
  }

  async findOne(id: string): Promise<UserDto> {
    const foundUser = await this.userRepository.findOne({
      where: {
        user_ids: id as any,
      },
    });

    // if (foundUser === null) {
    //   return null;
    // }

    return plainToInstance(UserDto, foundUser);
  }

  async deleteById(id: string): Promise<{ result: string }> {
    await this.userRepository.delete(id);
    return {
      result: 'success',
    };
  }
}
