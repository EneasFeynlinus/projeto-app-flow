import { PodcastTransferModel } from "../models/filter-podcast-models";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    //Define o contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };
    
    //Busco os dados
    const data = await repositoryPodcast();

    //Verifico o tipo de resposta
    responseFormat = {
        statusCode: data.length? StatusCode.OK : StatusCode.NoContent,
        body: data,
    }

    return responseFormat;
}