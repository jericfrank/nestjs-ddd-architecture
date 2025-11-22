import { Controller, Get, Param, Post, Query } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}