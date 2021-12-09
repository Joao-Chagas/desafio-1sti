import { Field, ObjectType } from "@nestjs/graphql";
import { UserResponse } from '@api/user/dto/response/User';

@ObjectType()
export class LoginResponse {
    @Field({ description: `User's response field` })
    user: UserResponse;

    @Field({ description: `User's token` })
    token: string;
}