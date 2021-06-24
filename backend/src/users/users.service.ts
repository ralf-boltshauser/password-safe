import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly users = [];

  async findAll() {
    return this.users;
  }

  async register(user: CreateUserDto): Promise<User> {
    if (
      this.users.find(
        (existingUser) => existingUser.username == user.username,
      ) != undefined
    ) {
      throw new UnauthorizedException();
    }

    const id = this.users[this.users.length - 1]?.userId + 1 || 0;
    const hash = await bcrypt.hash(user.password, 10);

    this.users.push({ userId: id, ...user, password: hash });
    return { userId: id, ...user, password: user.password };
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
