import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

import { IsEmailUnique } from 'src/libs/common/decorators/is-email-unique.decorator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsEmailUnique({ message: 'Email already exists' })
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
