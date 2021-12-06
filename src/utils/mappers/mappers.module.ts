import { Module } from "@nestjs/common/decorators/modules";
import { AddressMapper } from "@mappers/address/Address.mapper";
import { AddressMapperProvider } from "./address/address-mapper.provider";

@Module({
    providers: [AddressMapperProvider],
    exports: [AddressMapperProvider]

})
export class MappersModule {}