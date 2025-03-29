import express from "express";
import router from "./router";

export default class Application {
  createServer() {
    const server = express();

    server.use(express.static("public"));
    server.use(express.json());

    server.use(router);

    return server;
  }
}
