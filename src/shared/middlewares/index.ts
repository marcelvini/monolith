import { errorMiddleware } from "./errorMiddleware";
import express from 'express';
const beforeRoutesmiddlewareList = [
    express.json(),
]
const afterRoutesmiddlewareList = [
    errorMiddleware
]
export { afterRoutesmiddlewareList, beforeRoutesmiddlewareList }
