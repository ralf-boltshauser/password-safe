import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePasswordDto } from './dto/create-password.dto';
import { PasswordService } from './password.service';

@Controller('passwords')
export class PasswordController {
  constructor(private passwordService: PasswordService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createPassword(@Request() req, @Body() password: CreatePasswordDto) {
    return this.passwordService.create(req.user, password);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findALl(@Request() req) {
    return this.passwordService.findAll(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Request() req, @Param() params) {
    this.passwordService.delete(req.user, params.id);

    return true;
  }
}
