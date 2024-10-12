import { Socket } from "socket.io";

export async function disconnectHandler(this: Socket, args: any) {
    console.log(`disconnect ${this.id}`);
}