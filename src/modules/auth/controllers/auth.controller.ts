import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { RegisterUserDto } from '../dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() params: { email: string; password: string }) {
    return this.authService.login(params);
  }

  @Post('register')
  async register(@Body() params: RegisterUserDto) {
    return this.authService.register(params);
  }
}
