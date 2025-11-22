import { DataSource } from 'typeorm';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';

import { User } from 'src/modules/users/user.entity';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async validate(value: string) {
    if (!value) return true;

    const email = value.toLowerCase().trim();

    const repo = this.dataSource.getRepository(User);

    const exists = await repo.exists({
      where: { email },
    });

    return !exists;
  }

  defaultMessage(args: ValidationArguments) {
    return `Email already exists`;
  }
}
