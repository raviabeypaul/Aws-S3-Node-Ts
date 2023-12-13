import { ReservationDto } from "./../entities/Reservation";
import { AppResponse } from "./../entities/Response";
import { CrudI } from "./../interfaces/CrudI";
import { GetObjectCommand, S3 } from "@aws-sdk/client-s3";
import { v4 as uuid } from "uuid";
import { AppError } from "./../utils/AppError";
import { APP_CODES, HTTP_CODES } from "./../utils/Constants";
import { RegistertationService } from "./../service/RegisterationService";

export class RegisterationController implements CrudI {

    service : RegistertationService;
    constructor(){
        this.service= new RegistertationService()   
    }

    public async create(reservation: ReservationDto) {
        const id = await uuid();
        reservation.id = id;
        try {
            let result = await this.service.create(reservation)
            let appResponse: AppResponse = {
                hasError: false,
                httpStatusCode: 200,
                result: result
            }
            return appResponse
            
        } catch (error) {
            if (!(error instanceof AppError)) {
                throw new AppError(
                    HTTP_CODES.SERVER_ERROR,
                    APP_CODES.UPDATE_ERROR,
                    "Create Service Error",
                    error.message
                );
            }
        }

    }
    public async getAll() {
        try {
            let result = await  this.service.getAll()
            let appResponse: AppResponse = {
                hasError: false,
                httpStatusCode: 200,
                result: result
            }
            return appResponse
            
        } catch (error) {
            if (!(error instanceof AppError)) {
                throw new AppError(
                    HTTP_CODES.SERVER_ERROR,
                    APP_CODES.UPDATE_ERROR,
                    "Get Service Error",
                    error.message
                );
            }
        }
        
    }

    public async delete(id) {

    }
    public async update(reservation : ReservationDto) {
        try {
            let result = await this.service.update(reservation)
            let appResponse: AppResponse = {
                hasError: false,
                httpStatusCode: 200,
                result: result
            }
            return appResponse
            
        } catch (error) {
            if (!(error instanceof AppError)) {
                throw new AppError(
                    HTTP_CODES.SERVER_ERROR,
                    APP_CODES.UPDATE_ERROR,
                    "Update Service Error",
                    error.message
                );
            }
        }
    }
    public async test() {
        return {
            "value": "test"
        }
    }

}