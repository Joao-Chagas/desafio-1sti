import { Provider } from '@nestjs/common';
import { LoginRepository } from './login.repository';

export const LoginRepositoryProvider: Provider = {
  provide: 'LoginRepository',
  useClass: LoginRepository,
};
