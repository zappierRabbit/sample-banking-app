// src/user/user.controller.ts

import { Controller, Post, Body, NotFoundException, ConflictException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async registerUser(@Body() userData: { email: string; username: string; password: string }): Promise<User> {
    const existingUser = await this.userService.findByEmail(userData.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
    return this.userService.registerUser(userData);
  }
}
