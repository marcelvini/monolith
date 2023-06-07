interface IUseCase {
    execute(input?: any): any | Promise<any>
}
export { IUseCase }