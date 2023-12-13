import { APIGatewayProxyEvent, Context } from "aws-lambda";
import middy from "@middy/core";
import { RegisterationController } from "./../../../controllers/RegistrationController";
import { ServerlessErrorMiddleware } from "./../../../middlewares/ErrorMiddlewares";


export const handler = middy (async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  const apiResponse = {};

  const response = await new RegisterationController().test();

  console.log(`Service response => `, response);

  apiResponse["body"] = JSON.stringify(response["result"]);
  apiResponse["statusCode"] =
    response["hasError"] == false ? 200 : response["httpStatusCode"];
  apiResponse["headers"] = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  };
  console.log("hi")

  return apiResponse;
}).use(ServerlessErrorMiddleware());

