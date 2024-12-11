import * as http from "http";

import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-method";

const server = http.createServer(
   async (req: http.IncomingMessage, res: http.ServerResponse) => {

    //queryString é um texto pra consulta
    //http://localhost:3636/api/episode?p=flow
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    console.log(baseUrl);
    console.log(queryString);

    // listar podcasts
        if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
          await getListEpisodes(req, res);
        }

        if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
          await getFilterEpisodes(req, res)
        }
    }
);

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
})