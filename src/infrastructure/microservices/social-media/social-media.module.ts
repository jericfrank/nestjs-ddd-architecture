import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SocialMediaClient } from './social-media.client';

@Module({
  imports: [ConfigModule],
  providers: [SocialMediaClient],
  exports: [SocialMediaClient],
})
export class SocialMediaModule {}
