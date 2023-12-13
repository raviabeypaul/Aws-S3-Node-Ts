require('dotenv').config()
import { error, info } from "console";
import { createServer } from "./connectors/api/server";

try {
  // validateConfig([], ["PORT"]);
  info("Config is valid, starting Express server");

  const listener = createServer().listen(8080);
  info(`Listening on port : ${listener.address()["port"]}`);
} catch (e) {
  error("", e);
  process.exit(1);
}
