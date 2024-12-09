import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceListEpisodes = async () => {
    // Implementação do método de listagem de episódios
    // Retorna uma lista de episódios
    const data = await repositoryPodcast();

    return data;
}