import { Module } from "@nestjs/common";
import { UserRepositoryModule } from "@persistence/user/user.module";
import { LoginRepositoryModule } from "./login/login.module";

@Module({
    imports: [UserRepositoryModule, LoginRepositoryModule],
    exports: [UserRepositoryModule, LoginRepositoryModule],
})
export class PersistenceModule {}