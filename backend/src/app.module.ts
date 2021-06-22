import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordController } from './password/password.controller';
import { UserController } from './user/user.controller';
import { PasswordService } from './password/password.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, PasswordController, UserController],
  providers: [AppService, PasswordService, UserService],
})
export class AppModule {}
