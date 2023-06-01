import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_CONFIGS } from './configs/app';
import { UsersModule } from './user/user.module';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: APP_CONFIGS.NEST_APP_DB_USERNAME,
      password: APP_CONFIGS.NEST_APP_DB_PASSWORD,
      database: APP_CONFIGS.NEST_APP_DB_NAME,
      entities: [UserEntity],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
