import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';

export const typeOrmConfig = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.get<string>('DATABASE_HOST', 'localhost'),
  port: parseInt(config.get<string>('DATABASE_PORT', '5432')),
  username: config.get<string>('DATABASE_USER', 'postgres'),
  password: config.get<string>('DATABASE_PASSWORD', 'postgres'),
  database: config.get<string>('DATABASE_NAME', 'hogasiDb'),
  autoLoadEntities: true,
  synchronize: true,
  entities: [path.join(__dirname, '../../**/*.entity{.ts,.js}')],
  migrationsRun: true,
  logging: config.get<string>('NODE_ENV') !== 'production',
});