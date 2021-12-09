import { Module } from "@nestjs/common";
import { AddressDomainModule } from "@domain/address/address.module";
import { UserDomainModule } from "@domain/user/user.module";
import { LoginDomainModule } from "./login/login.module";

@Module({
    imports: [AddressDomainModule, UserDomainModule, LoginDomainModule],
    exports: [AddressDomainModule, UserDomainModule, LoginDomainModule]
})
export class DomainModule {}