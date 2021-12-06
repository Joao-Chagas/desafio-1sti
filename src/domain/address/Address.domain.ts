import { AddressResponse } from "@api/address/dto/response/Address";
import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IMapper } from "@interface/mapper/IMapper";
import { AddressApi } from "@services/address/address-api";

const AddressApiMapper = () => Inject('AddressMapper')

@Injectable()
export class AddressDomain {
    constructor(
        @AddressApiMapper() private readonly addressMapper: IMapper<AddressResponse>,
        private readonly addressApi: AddressApi
    ) {}

    async getByZipCode(zipCode: string): Promise<AddressResponse> {
        const address = await this.addressApi.getByZipCode(zipCode);
        
        if (!address) {
            throw new BadRequestException(`The zip-code is incorrect or doesn't exists`);
        }
        
        return await this.addressMapper.update(this.addressApi);
    }
}