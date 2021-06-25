import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordController } from './password/password.controller';
import { PasswordService } from './password/password.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, PasswordController],
  providers: [AppService, PasswordService],
})
export class AppModule {}
