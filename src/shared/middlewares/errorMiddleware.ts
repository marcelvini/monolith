import { NextFunction, Request, Response } from "express";
import { apiError } from "../errorHandling/errorTypes";

const errorMiddleware = (
    error: Error & Partial<apiError>,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = error.statusCode ?? 500
    const message = (process.env.NODE_ENV !== "development" && statusCode === 500) ? "Internal server error" : error.message
    let formattedMessage
    try {
        formattedMessage = JSON.parse(message)
    } catch {
        formattedMessage = message
    }
    if (typeof (message) === 'string') {
        return res.status(statusCode).send({ errors: formattedMessage })

    }

}
export { errorMiddleware }