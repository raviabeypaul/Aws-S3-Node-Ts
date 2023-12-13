import { APIGatewayProxyEvent, Context } from "aws-lambda";
import middy from "@middy/core";
import { ServerlessErrorMiddleware } from "./../../../middlewares/ErrorMiddlewares";
import { RegisterationController } from "./../../../controllers/RegistrationController";
import { ReservationDto } from "./../../../entities/Reservation";
import { AppResponse, AwsAPIGatewayResponseDto } from "./../../../entities/Response";


export const handler = middy(async (
    event: APIGatewayProxyEvent,
    context: Context
  ) => {
    console.log("Event => ", event);
  
    const response: Partial<AppResponse> = await new RegisterationController().create( JSON.parse(event.body))
  
    console.log(`Service response => `, response);
  
    const apiResponse: AwsAPIGatewayResponseDto = {
      body: await JSON.stringify(response.result),
      statusCode: response.hasError == false ? 200 : response.httpStatusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    };
  
    return apiResponse;
  }).use(ServerlessErrorMiddleware()) ;
