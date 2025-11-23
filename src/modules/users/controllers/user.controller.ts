import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(
    private userService: UserService,
  ) {}

  @Get('/')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
