import { Socket } from "socket.io";

export async function joinHandler(
    this: Socket,
    args: any,
    callback: (res: any) => void
) {
    console.group("print");
    console.log("room", this.rooms);
    console.log("id", this.id);
    console.log("data", this.data);
    console.log("args", args);
    console.groupEnd();

    if (callback) {
        callback({
            data: [1, 2, 3],
        });
    }
}