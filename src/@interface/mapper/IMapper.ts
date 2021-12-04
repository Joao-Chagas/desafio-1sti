export interface IMapper<T> {
    update(value: unknown): Promise<T>;
}