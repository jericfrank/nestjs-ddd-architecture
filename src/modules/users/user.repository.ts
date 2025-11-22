import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "./user.entity";
import { CreateUserDto } from "./create-user.dto";

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async createStore(dto: CreateUserDto): Promise<User> {
    const store = this.repo.create(dto);
    return this.repo.save(store);
  }

  async findAll(): Promise<User[]> {
    return this.repo.find();
  }
}