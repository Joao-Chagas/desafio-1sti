import { Provider } from "@nestjs/common";
import { UserDomain } from "@domain/user/user.domain";

export const UserDomainProvider: Provider = {
    provide: 'UserDomain',
    useClass: UserDomain,
}