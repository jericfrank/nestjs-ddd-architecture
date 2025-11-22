import { PickType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from './user.entity';

import { IsEmailUnique } from 'src/libs/common/decorators/is-email-unique.decorator';

export class CreateUserDto extends PickType(User, [
  'name',
  'email',
] as const) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsEmailUnique({ message: 'Email already exists' })
  email: string;
}