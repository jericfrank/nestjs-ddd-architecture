import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async create(params: CreateUserDto) {
    return this.userRepo.createStore(params);
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }
}