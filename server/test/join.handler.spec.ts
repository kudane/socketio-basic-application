import { expect, assert } from "chai";
import { createServer, Server as httpServer } from "http";
import { io, Socket } from "socket.io-client";
import { createApplication } from "../src/app";

describe("Test suite: Join", () => {
  let httpServer: httpServer,
    socket: Socket;

  beforeEach((done) => {
    httpServer = createServer();
    createApplication(httpServer);
    httpServer.listen(3000);
    socket = io("http://localhost:3000");
    done();
  });

  afterEach(() => {
    httpServer.close();
    socket.disconnect();
  });

  describe("client join", () => {
    it("success", (done) => {
      socket.emit(
        "join",
        {
          title: "lorem ipsum",
          completed: false,
        },
        (res: { data: []; }) => {
          console.log(res.data);
          assert(res.data.length > 0);
          done();
        })
    });
  });
});