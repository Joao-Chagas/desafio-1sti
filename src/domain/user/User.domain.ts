import { UserRequest } from '@api/user/dto/request/User';
import { UserResponse } from '@api/user/dto/response/User';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';

const UserRepository = () => Inject('UserRepository');

@Injectable()
export class UserDomain {
  constructor(@UserRepository() private readonly userRepository: IUserRepository) {}
  
  async create(data: UserRequest): Promise<UserResponse> {
    const user = await this.userRepository.create(data);

    if (!user) {
      throw new BadRequestException(`User already exists on database`);
    }

    return user;
  }

  async update(id: number, data: UserRequest): Promise<UserResponse> {
    const user = await this.userRepository.update(id, data);

    if (!user) {
      throw new BadRequestException(`User doesn't exists on database`);
    }

    return user;
  }

  async findAll(): Promise<UserResponse[]> {
    return this.userRepository.getAll();
  }
}
