import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';

export const typeOrmConfig = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.get<string>('DATABASE_HOST'),
  port: Number(config.get<number>('DATABASE_PORT')),
  username: config.get<string>('DATABASE_USER'),
  password: config.get<string>('DATABASE_PASSWORD'),
  database: config.get<string>('DATABASE_NAME'),
  autoLoadEntities: true,
  synchronize: true,
  entities: [path.join(__dirname, '../../**/*.entity{.ts,.js}')],
  migrationsRun: true,
  logging: config.get<string>('NODE_ENV') !== 'production',
});
