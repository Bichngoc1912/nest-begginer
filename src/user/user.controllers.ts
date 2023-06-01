import {
  Body,
  Controller,
  Post,
  Put,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserServices } from './user.services';

@Controller('api/users')
export class UserController {
  constructor(private readonly userServices: UserServices) {}

  @Post()
  createUser(@Body() user: UserDto): Promise<UserDto> {
    return this.userServices.save(user);
  }

  @Put(':id')
  updateUserById(
    @Param('id') id: string,
    @Body() user: UserDto,
  ): Promise<{ result: string }> {
    return this.userServices.update(id, user);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userServices.findOne(id);
  }

  @Delete('id')
  deleteById(@Param('id') id: string) {
    return this.userServices.deleteById(id);
  }
}
