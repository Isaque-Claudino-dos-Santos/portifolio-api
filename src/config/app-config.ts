import { env } from "process";

namespace appConfig {
  export const APP_HOST = env["APP_HOST"] ?? "localhost";
  export const APP_PORT = Number(env["APP_PORT"]) ?? 3000;
  export const APP_DEBUG = Boolean(env["APP_DEBUG"]);
}

export default appConfig;
