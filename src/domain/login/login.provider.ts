import { Provider } from '@nestjs/common';
import { LoginDomain } from './login.domain';

export const LoginDomainProvider: Provider = {
  provide: 'LoginDomain',
  useClass: LoginDomain,
};
