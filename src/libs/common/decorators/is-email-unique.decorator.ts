import { registerDecorator, ValidationOptions } from 'class-validator';

import { IsEmailUniqueConstraint } from '../validators/is-email-unique.validator';

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsEmailUniqueConstraint,
    });
  };
}
