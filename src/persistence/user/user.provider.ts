import { Provider } from "@nestjs/common";
import { UserRepository } from "@persistence/user/User.repository";

export const UserRepositoryProvider: Provider = {
    provide: 'UserRepository',
    useClass: UserRepository,
}