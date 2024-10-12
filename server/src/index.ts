import { createServer } from "http";
import { createApplication } from "./app";

const httpServer = createServer();

createApplication(
    httpServer,
    {
        cors: {
            origin: ["*"],
        },
    }
);

httpServer.listen(3000);
