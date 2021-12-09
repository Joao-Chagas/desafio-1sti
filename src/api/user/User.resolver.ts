import { UserDomain } from '@domain/user/user.domain';
import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserResponse } from '@api/user/dto/response/User';
import { UserRequest } from '@api/user/dto/request/User';
import { JwtAuthGuard } from '@auth/shared/jwt-auth.guard';

const User = () => Inject('UserDomain');

@Resolver()
export class UserResolver {
  constructor(@User() private readonly userDomain: UserDomain) {}

  @Query((returns) => UserResponse, {
    description: 'This query finds the user by cpf',
  })
  async findByCpf(@Args('cpf', { type: () => String }) cpf: string) {
    return this.userDomain.findByCpf(cpf);
  }

  @Query((returns) => UserResponse, {
    description: 'This query finds all users',
    name: 'getUsers',
    nullable: true,
  })
  async findAll() {
    return this.userDomain.findAll();
  }

  @Mutation((returns) => UserResponse, {
    description: 'This mutation creates a new user',
    name: 'createUser',
  })
  async create(@Args('data', { type: () => UserRequest }) data: UserRequest) {
    return this.userDomain.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation((returns) => UserResponse, {
    description: 'This mutation updates an user',
    name: 'updateUser'
  })
  async update(
    @Args('id', { type: () => Number }) id: number,
    @Args('data', { type: () => UserRequest }) data: UserRequest,
  ) {
    return this.userDomain.update(id, data);
  }
}
