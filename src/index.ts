require('dotenv').config()
import { error, info } from "console";
import { createServer } from "./connectors/api/server";
import https from 'https';
import fs from 'fs';
import path from 'path'
try {
  // validateConfig([], ["PORT"]);
  info("Config is valid, starting Express server");

  const app = createServer().listen(8080)
  // const sslServer  = https.createServer({
  //   key : fs.readFileSync(path.join(__dirname, ".." ,'cert','key.pem')),
  //   cert : fs.readFileSync(path.join(__dirname,"..",'cert','cert.pem'))
  // },app).listen(8080);
  
  info(`Listening on port : ${app.address()["port"]}`);
} catch (e) {
  error("", e);
  process.exit(1);
}
