import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { randomUUID } from 'crypto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(dto: CreateUserDto): User {
    const user: User = { id: randomUUID(), ...dto };
    this.users.push(user);
    return user;
  }
  findAll(): User[] {
    return this.users;
  }
  findOne(id: string): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
  remove(id: string): void {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) throw new NotFoundException('User not found');
    this.users.splice(index, 1);
  }
  patch(id: string, dto: UpdateUserDto): User {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) throw new NotFoundException('User not found');

    const updated = { ...this.users[index], ...dto };
    this.users[index] = updated;
    return updated;
  }
}
