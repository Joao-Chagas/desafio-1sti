import { Module } from "@nestjs/common";
import { AddressDomainProvider } from "@domain/address/address.provider";
import { MappersModule } from "@mappers/mappers.module";
import { AddressApi } from "@services/address/address-api";

@Module({
    imports: [MappersModule],
    providers: [AddressDomainProvider, AddressApi],
    exports: [AddressDomainProvider]
})
export class AddressDomainModule {}