import { Provider } from "@nestjs/common";
import { AddressMapper } from "./Address.mapper";

export const AddressMapperProvider: Provider = {
    provide: 'AddressMapper',
    useClass: AddressMapper
}