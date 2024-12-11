import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcasName: string | undefined): Promise<PodcastTransferModel> => {
    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };
    //Buscando os dados
    const queryString = podcasName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //Verifico se tem conteudo
    responseFormat = {
        statusCode: data.length? StatusCode.OK : StatusCode.NoContent,
        body: data,
    }

    return responseFormat
}