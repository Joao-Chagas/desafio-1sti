import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType({ description: 'This object is the response of the user query' })
export class UserResponse {
  @Field({ 
      description: `User's id`,
      nullable: true
    })
  id: number;

  @Field({ 
      description: `User's name`,
      nullable: true
    })
  name: string;

  @Field({ 
      description: `User's cpf`,
      nullable: true,
    })
  cpf: string;

  @Field({ 
      description: `User's cellphone`,
      nullable: true
    })
  cellphone: string

  @Field({ description: `User's zip code` })
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
