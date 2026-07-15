import { Injectable,NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { randomUUID} from 'crypto';



@Injectable()
export class UsersService {
      private users: User[] = [];

      create(dto:CreateUserDto): User{
            const user : User = {id: randomUUID(), ...dto};
            this.users.push(user);
            return user;
      }
      findAll() : User[]{
            return this.users;
      }
      findOne(id:string) : User {
      const user = this.users.find((u) => u.id === id);
      if(!user) throw new NotFoundException('User not found');
      return user;
      }
      remove(id:string) :void {
            const index = this.users.findIndex((u) => u.id === id);
            if(index === -1) throw new NotFoundException('User not found');
            this.users.splice(index,1);
      }
}
