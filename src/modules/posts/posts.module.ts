import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from '../users/controllers/user.controller';
import { User } from '../users/entities/user.entity';
import { UserQuerier } from '../users/queriers/user.querier';
import { UserRepository } from '../users/repositories/user.repository';
import { UserService } from '../users/services/user.service';
import { PostsController } from './controllers/posts.controller';

import { SocialMediaModule } from 'src/infrastructure/microservice/social-media';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    SocialMediaModule,
  ],
  controllers: [
    UserController,
    PostsController
  ],
  exports: [UserService],
  providers: [UserService, UserRepository, UserQuerier],
})
export class PostsModule {}
