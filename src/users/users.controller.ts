import { Controller,Get, Post,Delete,Body,Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
      constructor(private readonly userService: UsersService){}

      @Post()
      create(@Body() dto:CreateUserDto){
            return this.userService.create(dto);
      }
      @Get()
      findAll(){
            return this.userService.findAll;
      }
      @Get(':id')
      findOne(@Param('id') id:string){
            return this.userService.findOne(id);
      }
      @Delete(':id')
      remove(@Param('id') id:string){
            return this.userService.remove(id);
            return {message: 'deleted'}
      }
}
