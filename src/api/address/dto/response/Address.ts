import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType({ description: 'This object is the response of the address query' })
export class AddressResponse {
  @Field({ description: 'Address zip code' })
  zipCode: string;

  @Field({ 
    description: 'Address public place',
    nullable: true,
  })
  publicPlace: string;

  @Field({
    description: 'Address complement', 
    nullable: true 
  })
  complement: string;

  @Field({
    description: 'Address district', 
    nullable: true 
  })
  district: string;

  @Field({
    description: 'Address state', 
    nullable: true 
  })
  state: string;

  @Field({
    description: 'Address federative unit', 
    nullable: true 
  })
  federativeUnit: string;

  @Field({
    description: 'Address IBGE', 
    nullable: true 
  })
  ibge: string;

  @Field({
    description: 'Address Information and Survey Guide', 
    nullable: true 
  })
  isg: string;

  @Field({
    description: 'Address country code', 
    nullable: true 
  })
  countryCode: string;

  @Field({
    description: 'Integrated Financial Management system id', 
    nullable: true 
  })
  ifms: string;
}
