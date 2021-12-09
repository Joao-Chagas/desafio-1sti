import { Injectable } from "@nestjs/common";
import { AddressResponse } from "@api/address/dto/response/Address";

@Injectable()
export class AddressMapper implements IMapper<AddressResponse> {
    async update(data: IAddress): Promise<AddressResponse> {
        return {
            zipCode: data.cep,
            publicPlace: data.logradouro,
            complement: data.complemento,
            district: data.bairro,
            state: data.localidade,
            federativeUnit: data.uf,
            ibge: data.ibge,
            isg: data.gia,
            countryCode: data.ddd,
            ifms: data.siafi,
        };
    }
}