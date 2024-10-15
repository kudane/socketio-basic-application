import { createServer } from "http";
import { createApplication } from "./app";

const httpServer = createServer();

createApplication(
    httpServer,
    {
        cors: {
            origin: process.env.ALLOW_ORIGINS?.split(","),
        },
    }
);

httpServer.listen(process.env.PORT);
