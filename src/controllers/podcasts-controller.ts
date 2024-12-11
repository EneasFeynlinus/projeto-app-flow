import {IncomingMessage, ServerResponse} from 'http';

import {serviceListEpisodes} from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) =>{
    const content = await serviceListEpisodes()

    res.writeHead(StatusCode.OK,{'Content-Type': ContentType.JSON});
    res.end(JSON.stringify(content));
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse,
) => {
    const queryString = req.url?.split("?p=")[1] || "";
    const content = await serviceFilterEpisodes(queryString);

    res.writeHead(StatusCode.OK, {"Content-Type": ContentType.JSON});
    res.end(JSON.stringify(content));
}