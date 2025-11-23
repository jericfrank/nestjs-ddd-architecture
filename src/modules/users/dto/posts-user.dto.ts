import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class PostsUserDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}
