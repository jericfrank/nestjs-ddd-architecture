import { Injectable, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';

import { PostsUserDto } from 'src/modules/users/dto/posts-user.dto';

@Injectable()
class SocialMediaClient {
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

@Module({
  imports: [ConfigModule],
  providers: [SocialMediaClient],
  exports: [SocialMediaClient],
})
class SocialMediaModule {}

export { SocialMediaClient, SocialMediaModule };
