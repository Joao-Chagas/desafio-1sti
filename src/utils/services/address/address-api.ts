import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AddressType } from './types/address.type';

@Injectable()
export class AddressApi {
  async getByZipCode(zipCode: string): Promise<AddressType> {
    try {
        const url = `https://viacep.com.br/ws/${zipCode}/json/`;
        const { data } = await axios.get(url);
        return data as AddressType;

    } catch (err) {
      return undefined;
    }
  }
}
