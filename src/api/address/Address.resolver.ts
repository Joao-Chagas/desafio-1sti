import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { AddressDomain } from '@domain/address/Address.domain';
import { AddressResponse } from '@api/address/dto/response/Address';

const Address = () => Inject('AddressDomain')

@Resolver()
export class AddressResolver {
    constructor(@Address() private readonly addressDomain: AddressDomain) {}

  @Query((returns) => AddressResponse, {
    name: 'getAddressByZipCode',
    description: 'This query retrieves the complete address by zip code',
  })
  async getByZipCode(
    @Args('zipCode', { type: () => String }) zipCode: string,
  ) {
      return await this.addressDomain.getByZipCode(zipCode);
  }
}
