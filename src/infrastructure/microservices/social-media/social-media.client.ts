import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';

import { PostsUserDto } from 'src/modules/users/dto/posts-user.dto';

@Injectable()
export class SocialMediaClient {
  private axiosClient: AxiosInstance;

  constructor(private readonly configService: ConfigService) {
    const baseURL = this.configService.get<string>('SOCIALMEDIA_SERVICE_API');

    this.axiosClient = axios.create({ baseURL, timeout: 5000 });
  }

  async findPostByUserId(userId: string) {
    const response = await this.axiosClient.get(`/posts?userId=${userId}`);
    return response.data;
  }

  async createPost(userId: string, params: PostsUserDto) {
    const response = await this.axiosClient.post(`/posts`, { ...params, userId });
    return response.data;
  }
}
