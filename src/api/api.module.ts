import { Module } from '@nestjs/common';
import { DomainModule } from '@domain/domain.module';
import { AddressResolver } from '@api/address/Address.resolver';

@Module({
  imports: [DomainModule],
  providers: [AddressResolver],
})
export class ApiModule {}
