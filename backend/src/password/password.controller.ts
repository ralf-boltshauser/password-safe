import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreatePasswordDto } from './dto/create-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { PasswordService } from './password.service';

@Controller('passwords')
export class PasswordController {
  constructor(private passwordService: PasswordService) {}

  @Get()
  async getAccountCredentials() {
    const accountCredentials = await this.passwordService.getAccountCredentials();
    return accountCredentials;
  }

  @Get(':accountCredentialId')
  async getAccountCredential(@Param('accountCredentialId') accountCredentialId) {
    const accountCredential = await this.passwordService.getAccountCredential(accountCredentialId);
    return accountCredential;
  }

  @Post()
  async addAccountCredential(@Body() createPasswordDto: CreatePasswordDto) {
    const accountCredentials = await this.passwordService.getAccountCredentials();
    createPasswordDto.id = accountCredentials.length + 1;
    const accountCredential = await this.passwordService.addAccountCredential(createPasswordDto);
    return accountCredential;
  }

  @Delete() 
  async deleteAccountCredential(@Query() query) {
    const courses = await this.passwordService.deleteAccountCredential(query.courseId);
    return courses;
  }

  @Put(':accountCredentialId')
  async update(
    @Param('accountCredentialId') accountCredentialId,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    updatePasswordDto.id = accountCredentialId;
    return await this.passwordService.updateAccountCredential(accountCredentialId, updatePasswordDto);
  }
}
