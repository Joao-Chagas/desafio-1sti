import { DatabaseService } from "@database/database.service";
import { Inject, Injectable } from "@nestjs/common";

const Database = () => Inject('Database');

@Injectable()
export class LoginRepository implements ILoginRepository {
    constructor(
        @Database() private readonly database: DatabaseService,
    ) {}

    async byCpf(cpf: string): Promise<TUserResponse> {
        return this.database.user.findFirst({
          where: { cpf },
        });
    }
}