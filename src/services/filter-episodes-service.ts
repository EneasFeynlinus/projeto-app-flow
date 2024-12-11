import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async (podcasName: string | undefined) => {
    const queryString = podcasName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(podcasName);

    return data
}