import { AuthModule } from '@auth/auth.module';
import { AuthService } from '@auth/shared/auth.service';
import { Module } from '@nestjs/common';
import { PersistenceModule } from '@persistence/persistence.module';
import { LoginDomainProvider } from './login.provider';

@Module({
  imports: [PersistenceModule, AuthModule],
  providers: [LoginDomainProvider],
  exports: [LoginDomainProvider],
})
export class LoginDomainModule {}
