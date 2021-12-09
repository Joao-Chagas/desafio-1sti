import { Module } from "@nestjs/common";
import { PersistenceModule } from "@persistence/persistence.module";
import { UserDomainProvider } from "@domain/user/user.provider";
import { AuthModule } from "@auth/auth.module";

@Module({
    imports: [PersistenceModule, AuthModule],
    providers: [UserDomainProvider],
    exports: [UserDomainProvider],
})
export class UserDomainModule {}