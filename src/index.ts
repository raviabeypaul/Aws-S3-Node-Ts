require('dotenv').config()
import { error, info } from "console";
import { createServer } from "./connectors/api/server";

try {
  info("Config is valid, starting Express server");

  const app = createServer().listen(8080)
  info(`Listening on port : ${app.address()["port"]}`);
} catch (e) {
  error("", e);
  process.exit(1);
}
