import "dotenv/config";
import appConfig from "./config/app-config";
import Application from "./Application";

const app = new Application();
const server = app.createServer();

server.listen(appConfig.APP_PORT, appConfig.APP_HOST, () => {
  if (!appConfig.APP_DEBUG) return;
  const msg = `oened host in http://${appConfig.APP_HOST}:${appConfig.APP_PORT}`;
  console.log(msg);
});
