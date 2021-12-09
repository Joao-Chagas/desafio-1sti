import { LoginDomain } from "@domain/login/login.domain";
import { Inject } from "@nestjs/common";
import { Resolver, Query, Args } from "@nestjs/graphql";
import { LoginResponse } from "./dto/response/login";

const Login = () => Inject('LoginDomain');

@Resolver()
export class LoginResolver {
    constructor(@Login() private readonly loginDomain: LoginDomain) {}

    @Query((returns) => LoginResponse, {
        name: 'loginByCpf',
    })
    async byCpf(@Args('cpf', { type: () => String }) cpf: string) {
        return this.loginDomain.byCpf(cpf);
    }
}