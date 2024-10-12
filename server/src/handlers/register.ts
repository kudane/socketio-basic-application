import { Socket } from "socket.io";
import { joinHandler } from "./join.handler";
import { disconnectHandler } from "./disconnect.handler";

export function registerEvents(socket: Socket) {
    socket.on("join", joinHandler);
    socket.on("disconnect", disconnectHandler);
}