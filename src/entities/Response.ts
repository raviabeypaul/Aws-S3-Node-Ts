export interface AwsAPIGatewayResponseDto {
    headers: object;
    body: string;
    statusCode: number;
  }

  export interface AppResponse {
    hasError : boolean;
    httpStatusCode : number;
    result : any
  }