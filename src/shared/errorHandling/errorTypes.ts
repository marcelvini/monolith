class apiError extends Error {
    public statusCode
    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode ?? 500
    }

}
class badRequestError extends apiError {
    constructor(message: string) {
        super(message, 400)
    }
}
class notFoundError extends apiError {
    constructor(message: string) {
        super(message, 404)
    }
}
export { apiError, badRequestError, notFoundError }