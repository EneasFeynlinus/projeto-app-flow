import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async (podcasName: string) => {
    const data = await repositoryPodcast(podcasName);

    return data
}