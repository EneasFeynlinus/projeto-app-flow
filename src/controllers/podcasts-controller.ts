import {IncomingMessage, ServerResponse} from 'http';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) =>{
    res.writeHead(200,{'Content-Type': "application/json"});
    res.end(JSON.stringify([
        {
            podcastName: "flow",
            episode: "ESPECIAL TOLKIEN e SENHOR DOS ANEIS",
            videoId: "o5di2HQIyhc",
            cover: "https://i.ytimg.com/vi/o5di2HQIyhc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5JkEUCwfomt75f7T88-QoSZI45g",
            link: "https://www.youtube.com/watch?v=o5di2HQIyhc",
            categories: ["Tolkien", "midle earth"]
        },
        {
            podcastName: "flow",
            episode: "NUNCA MAIS ERRE NOS SEUS TREINOS [+ Julio Balestrin]",
            videoId: "vIRM1AC3kR4",
            cover: "https://i.ytimg.com/vi/vIRM1AC3kR4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBJXLsW95xslto0hAzBD6xgcLyUNg",
            link: "https://www.youtube.com/watch?v=vIRM1AC3kR4",
            categories: ["saúde", "bodybuilder"]
        },
    
    ]))
}