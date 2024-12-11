import { FilterPodcastModel } from "../models/filter-podcast-models";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcasName: string | undefined): Promise<FilterPodcastModel> => {
    //define a interface de retorno
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };
    //Buscando os dados
    const queryString = podcasName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //Verifico se tem conteudo
    if (data.length){
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }

    responseFormat.body = data;

    return responseFormat
}