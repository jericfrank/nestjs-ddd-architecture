import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { RegisterUserDto } from '../../auth/dto/register-user.dto';
import { UserQuerier } from '../queriers/user.querier';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userQuerier: UserQuerier,
  ) {}

  async register(params: RegisterUserDto) {
    return this.userRepo.register(params);
  }

  async findAll(): Promise<User[]> {
    return this.userQuerier.findAll();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userQuerier.findByEmail(email);
  }
}