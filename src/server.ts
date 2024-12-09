import * as http from "http";

const server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {}
);

server.listen(3333, () => {
    console.log("Server is running at http://localhost:3333/");
})