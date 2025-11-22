import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { UserQuerier } from './queriers/user.querier';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  exports: [UserService], 
  providers: [UserService, UserRepository, UserQuerier],
})
export class UserModule {}