import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from '../../users/services/user.service';
import { PostsUserDto } from '../../users/dto/posts-user.dto';

@Controller('posts')
@UseGuards(AuthGuard('jwt'))
export class PostsController {
  constructor(
    private userService: UserService,
  ) {}

  @Get()
  async findByUserId(@Request() req) {
    return this.userService.findPostByUserId(req.user.id);
  }

  @Post()
  async create(@Request() req, @Body() params: PostsUserDto) {
    return this.userService.createPost(req.user.id, params);
  }
}
