type TUserRequest = import('@api/user/dto/request/User').UserRequest;
type TUserResponse = import('@api/User/dto/response/User').UserResponse;

declare interface IUserRepository {
  getAll(): Promise<TUserResponse[]>;
  create(data: TUserRequest): Promise<TUserResponse>;
  update(id: number, data: TUserRequest): Promise<TUserResponse>;
}