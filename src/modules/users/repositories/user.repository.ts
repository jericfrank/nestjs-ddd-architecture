import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RegisterUserDto } from 'src/modules/auth/dto/register-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async register(dto: RegisterUserDto): Promise<User> {
    const store = this.repo.create(dto);
    return this.repo.save(store);
  }
}
