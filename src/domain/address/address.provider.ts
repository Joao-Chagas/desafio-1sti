import { Provider } from "@nestjs/common";
import { AddressDomain } from "@domain/address/Address.domain";

export const AddressDomainProvider: Provider = {
    provide: 'AddressDomain',
    useClass: AddressDomain,
}