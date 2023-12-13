import { AppError } from "./../utils/AppError";
import { NextFunction, Request, Response } from 'express';

export const ServerlessErrorMiddleware = () => {
    const onError = async (request) => {
        let apiResponse = {}
        apiResponse["headers"] = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        };
        if (request.error instanceof AppError) {
            let result = {
                code: request.error.appErrorCode,
                message: request.error.message,
                error: request.error.errors
            }
            apiResponse["body"] = JSON.stringify(result);
            apiResponse["statusCode"] = request.error.httpStatusCode;
        } else {
            let arrError = [];
            if(request.error instanceof String){
                arrError.push(request.error)
            }
            if(request.error.message){
                arrError.push(request.error.message)
            }
            let appError = new AppError(500, 5000, "Some error occurred", arrError)
            let result = {
                code: appError.appErrorCode,
                message: appError.message,
                error: appError.errors
            }
            apiResponse["body"] = JSON.stringify(result);
            apiResponse["statusCode"] = appError.httpStatusCode;
        }
        request.response = apiResponse
        console.log("[ERROR] error = ", request)
        return apiResponse;
    }

    return {
        onError: onError,
    }
}

export const ExpressErrorMiddleware = (error: any, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError ) {
        let result = {
            code: error.appErrorCode,
            message: error.message,
            error: error.errors
        }
        console.error("[ERROR] Error => ", error.stack)
        response.status(error.httpStatusCode).send(result)
    } else {
        let arrError = [];
        if(error instanceof String){
            arrError.push(error)
        }
        if(error.message){
            arrError.push(error.message)
        }
        let appError = new AppError(500, 5000, "Some error occurred", arrError)
        let result = {
            code: appError.appErrorCode,
            message: appError.message,
            error: appError.errors
        }
        console.error("[ERROR] Error => ", error.stack)
        response.status(appError.httpStatusCode).send(result)
    }
}