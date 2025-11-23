import { Module } from '@nestjs/common';

import { IsEmailUniqueConstraint } from './validators/is-email-unique.validator';

@Module({
  providers: [IsEmailUniqueConstraint],
  exports: [IsEmailUniqueConstraint],
})
export class SharedModule {}
