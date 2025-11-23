import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { RegisterUserDto } from '../../auth/dto/register-user.dto';
import { UserQuerier } from '../queriers/user.querier';
import { UserRepository } from '../repositories/user.repository';
import { PostsUserDto } from '../dto/posts-user.dto';

import { SocialMediaClient } from 'src/infrastructure/microservice/social-media';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userQuerier: UserQuerier,
    private readonly socialMediaClient: SocialMediaClient,
  ) {}

  async register(params: RegisterUserDto) {
    return this.userRepo.register(params);
  }

  async findAll(): Promise<User[]> {
    return this.userQuerier.findAll();
  }

  async findById(id: string): Promise<User | null> {
    return this.userQuerier.findById(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userQuerier.findByEmail(email);
  }

  async findPostByUserId(userId: string): Promise<any | null> {
    return this.socialMediaClient.findPostByUserId(userId);
  }

  async createPost(userId: string, params: PostsUserDto): Promise<any | null> {
    return this.socialMediaClient.createPost(userId, params);
  }
}
