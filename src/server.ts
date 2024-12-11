import * as http from "http";

import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';

const server = http.createServer(
   async (req: http.IncomingMessage, res: http.ServerResponse) => {

    //queryString é um texto pra consulta
    //http://localhost:3636/api/episode?p=flow
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    console.log(baseUrl);
    console.log(queryString);

    // listar podcasts
        if(req.method === 'GET' && baseUrl === "/api/list"){
          await getListEpisodes(req, res);
        }

        if(req.method === 'GET' && baseUrl === "/api/episode"){
          await getFilterEpisodes(req, res)
        }
    }
);

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
})