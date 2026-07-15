import {IsString,IsInt,Min,Max} from 'class-validator';

export class CreateUserDto {
      @IsString()
      name!:string;

      @IsInt()
      @Min(6)
      @Max(99)
      age!:number;
      @IsString()
      bio!:string;
}