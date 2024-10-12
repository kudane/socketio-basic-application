import { Server as HttpServer } from "http";
import { Server, ServerOptions } from "socket.io";
import { registerEvents } from "./handlers/register";

export function createApplication(
    httpServer: HttpServer,
    serverOptions: Partial<ServerOptions> = {}
): Server {
    const io = new Server(httpServer, serverOptions);
    io.on("connection", registerEvents);
    return io;
}