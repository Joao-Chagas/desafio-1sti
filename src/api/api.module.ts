import { Module } from '@nestjs/common';
import { DomainModule } from '@domain/domain.module';
import { AddressResolver } from '@api/address/Address.resolver';
import { UserResolver } from '@api/user/User.resolver';
import { LoginResolver } from './login/login.resolver';

@Module({
  imports: [DomainModule],
  providers: [AddressResolver, UserResolver, LoginResolver],
})
export class ApiModule {}
