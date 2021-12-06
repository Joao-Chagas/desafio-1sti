import { Module } from "@nestjs/common";
import { AddressDomainModule } from "@domain/address/address.module";

@Module({
    imports: [AddressDomainModule],
    exports: [AddressDomainModule]
})
export class DomainModule {}