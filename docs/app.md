# Nome do aplicativo
Podcast Manager (Dominio da app)

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes podcasts separados por categoria.

### Domínio
Podcasts feitos em vídeo

### Features (Funcionalidades)

- Listar os episódios podcasts em sessões de categorias
    - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como 

#### Feature:
- Listar os episódios podcasts em sessões de categorias

### Como vou implementar:
GET: retorna lista de episódios.

response:

```js
[
    {
        podcastName: "flow",
        episode: "ESPECIAL TOLKIEN e SENHOR DOS ANEIS",
        videoId: "o5di2HQIyhc"
        cover: "https://i.ytimg.com/vi/o5di2HQIyhc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5JkEUCwfomt75f7T88-QoSZI45g",
        link: "https://www.youtube.com/watch?v=o5di2HQIyhc",
        categories: ["Tolkien", "midle earth"]
    },
    {
        podcastName: "flow",
        episode: "NUNCA MAIS ERRE NOS SEUS TREINOS [+ Julio Balestrin]",
        videoId: "vIRM1AC3kR4"
        cover: "https://i.ytimg.com/vi/vIRM1AC3kR4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBJXLsW95xslto0hAzBD6xgcLyUNg",
        link: "https://www.youtube.com/watch?v=vIRM1AC3kR4",
        categories: ["saúde", "bodybuilder"]
    },

]
```
GET: retorna lista de episódios baseado em um parametro enviado pelo client do nome do podcast.