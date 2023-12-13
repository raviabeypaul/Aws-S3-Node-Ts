# Getting Started with Reservation App

This project was written with Node Js (Typescript) with Aws Sdk as a dependency to control s3 objects keeping in mind to support serverful as well as serverless code base in mind.

## Available Scripts

In the project directory, you can run:

### `npm run start:dev-win`

Runs the app in the development mode.\

Api is running on [http://ec2-3-82-108-46.compute-1.amazonaws.com:8080/](http://ec2-3-82-108-46.compute-1.amazonaws.com:8080/). Click to to view the response in the browser.


### `Folder Structure`

Folder structure are as Follows

src - `home to all source code`

src/connectors - `Connector to Express Api as Well as Serverless Handler`

src/controller - `Controllers for the services`

src/entities - `Entitin the application`

src/middleware/ - `Middlewares in the app routes`

src/service - `Service that connects to Db / External Source`

src/utils - `This contains common util functions`

Your app is ready to be deployed!

