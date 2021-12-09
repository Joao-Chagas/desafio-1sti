import { Field, InputType } from '@nestjs/graphql';
import { IsPhoneNumber } from 'class-validator';

@InputType({ description: 'This object is the request of the user query' })
export class UserRequest {
  @Field({
    description: `User's name`,
    nullable: true,
  })
  name: string;

  @Field({
    description: `User's cpf`,
    nullable: true,
  })
  cpf: string;

  @Field({
    description: `User's cellphone`,
    nullable: true,
  })
  @IsPhoneNumber('BR')
  cellphone: string;

  @Field({ 
    description: `User's zip code`,
    nullable: true,
  })
  zipCode: string;

  @Field({
    description: `User's public place`,
    nullable: true,
  })
  publicPlace: string;

  @Field({
    description: `User's city`,
    nullable: true,
  })
  city: string;

  @Field({
    description: `User's state`,
    nullable: true,
  })
  state: string;
}
