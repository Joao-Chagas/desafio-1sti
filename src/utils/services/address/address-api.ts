import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AddressApi {
  async getByZipCode(zipCode: string): Promise<IAddress> {
    try {
        const url = `https://viacep.com.br/ws/${zipCode}/json/`;
        const { data } = await axios.get(url);
        return data as IAddress;

    } catch (err) {
      return undefined;
    }
  }
}
