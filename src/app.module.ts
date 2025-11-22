import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './modules/users/user.module';
import { DatabaseModule } from './infrastructure/database/db.module';
import { SharedModule } from './libs/common/modules/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    SharedModule,
    UserModule,
  ],
})
export class AppModule {}