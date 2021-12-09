import { UserRequest } from '@api/user/dto/request/User';
import { UserResponse } from '@api/user/dto/response/User';
import { DatabaseService } from '@database/database.service';
import { Inject, Injectable } from '@nestjs/common';

const Database = () => Inject('Database');

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@Database() private readonly database: DatabaseService) {}

  async create(data: UserRequest): Promise<UserResponse> {
    const cpfExists = await this.database.user.findFirst({
      select: {
        cpf: true,
      },
      where: {
        cpf: data.cpf,
      },
    });

    if (cpfExists) {
      return undefined;
    }

    return await this.database.user.create({ data });
  }

  async update(id: number, data: UserRequest): Promise<UserResponse> {
    const userExists = await this.database.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExists) {
      return undefined;
    }

    return await this.database.user.update({
      where: { id },
      data,
    });
  }

  async getAll(): Promise<UserResponse[]> {
    return this.database.user.findMany();
  }
}
