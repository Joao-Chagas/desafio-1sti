import { LoginResponse } from '@api/login/dto/response/login';
import { AuthService } from '@auth/shared/auth.service';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';

const LoginRepository = () => Inject('LoginRepository');

@Injectable()
export class LoginDomain {
  constructor(
        @LoginRepository() private readonly loginRepository: ILoginRepository,
        private readonly authService: AuthService,
    ) {}

  async byCpf(cpf: string): Promise<LoginResponse> {
    const user = await this.loginRepository.byCpf(cpf);

    if (!user) {
      throw new BadRequestException(`User not found or doesn't exists`);
    }

    const token = await this.authService.generateToken(user);

    return { user, token };
  }
}
