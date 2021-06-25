import { BadRequestException, Injectable } from '@nestjs/common';
import { Password } from 'src/entities/password.entity';
import { User } from 'src/entities/user.entity';
import { CreatePasswordDto } from './dto/create-password.dto';
import * as CryptoJs from 'crypto-js';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class PasswordService {
  constructor(private userService: UsersService) {}
  private passwords: Password[] = [];
  create(user: User, password: CreatePasswordDto) {
    const id = this.passwords[this.passwords.length - 1]?.passwordId + 1 || 0;
    const passwordEntity: Password = {
      passwordId: id,
      userId: user.userId,
      name: password.name,
      password: this.encrypt(password.password, user.userId + user.username),
    };
    this.passwords.push(passwordEntity);
    return true;
  }

  findAll(user: User) {
    const tempPasswords = [];
    this.passwords.forEach((password) => {
      if (password.userId == user.userId) {
        tempPasswords.push({ ...password });
      }
    });

    tempPasswords.filter(
      (password: Password) => password.userId == user.userId,
    );
    tempPasswords.map((password: Password) => {
      password.password = this.decrypt(
        password.password,
        user.userId + user.username,
      );
      return password;
    });
    return tempPasswords;
  }

  encrypt(message: string, key: string) {
    return CryptoJs.AES.encrypt(message, key).toString();
  }

  delete(user: User, id: number) {
    const passwordToDelete = this.passwords.find(
      (password) => password.passwordId == id,
    );
    if (passwordToDelete.userId == user.userId) {
      const index = this.passwords.indexOf(passwordToDelete);
      if (index > -1) {
        this.passwords.splice(index, 1);
      }
    } else {
      throw new BadRequestException();
    }
  }

  decrypt(cipherText: string, key: string) {
    const bytes = CryptoJs.AES.decrypt(cipherText, key);
    return bytes.toString(CryptoJs.enc.Utf8);
  }
}
