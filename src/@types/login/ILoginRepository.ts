declare interface ILoginRepository {
    byCpf(cpf: string): Promise<TUserResponse>;
}