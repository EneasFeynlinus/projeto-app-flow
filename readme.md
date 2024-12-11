# Podcast Manager

## Descrição

O **Podcast Manager** é um aplicativo no estilo "Netflix" que centraliza e organiza podcasts em vídeo, separados por categorias, facilitando o acesso e a navegação por episódios de diferentes temas. O foco do aplicativo é fornecer uma interface simples e eficiente para assistir e explorar podcasts em vídeo, com funcionalidades de filtro por categoria e por nome do podcast.

## Funcionalidades

- **Listagem de episódios por categorias**: O aplicativo exibe episódios de podcasts organizados em categorias como saúde, bodybuilding, mentalidade e humor.
- **Filtragem de episódios**: O usuário pode buscar episódios por nome de podcast, tornando a busca mais ágil e personalizada.

## Tecnologias Utilizadas

O projeto **Podcast Manager** foi desenvolvido utilizando as seguintes tecnologias e dependências:

- **[Node.js](https://nodejs.org/)**: Plataforma JavaScript usada para criar a aplicação do servidor.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, facilitando o desenvolvimento e manutenção do código.
- **[TSX](https://github.com/esbuild/tsx)**: Uma ferramenta que permite executar arquivos TypeScript diretamente no Node.js.
- **[Tsup](https://github.com/egoist/tsup)**: Utilitário para empacotar e compilar o código TypeScript em JavaScript otimizado para produção.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: Tipagens TypeScript para o Node.js, garantindo maior segurança e suporte ao desenvolvimento.
  
### Dependências de Desenvolvimento

- **[typescript](https://www.typescriptlang.org/)**: Compilador TypeScript.
- **[tsx](https://github.com/esbuild/tsx)**: Execução de arquivos TypeScript diretamente.
- **[tsup](https://github.com/egoist/tsup)**: Ferramenta de bundling para compilar e empacotar os arquivos TypeScript.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: Tipagens para o Node.js, utilizadas durante o desenvolvimento.

### Scripts

- **`start:dev`**: Inicia o servidor em ambiente de desenvolvimento com `tsx`.
- **`start:watch`**: Inicia o servidor e fica "ouvindo" as alterações nos arquivos.
- **`dist`**: Cria a versão compilada para distribuição.
- **`start:dis`**: Compila o código e inicia o servidor em ambiente de produção.

Essas tecnologias ajudam a garantir que o projeto seja rápido, escalável e fácil de manter.

## Endpoints

### 1. Listar episódios de podcasts por categorias

**Método:** GET  
**URL:** `/episodes`  
**Descrição:** Retorna uma lista de episódios organizados por categoria. Cada episódio contém informações como nome do podcast, título do episódio, ID do vídeo, link para o vídeo no YouTube, capa e categorias.

#### Exemplo de resposta:

```json
[
    {
        "podcastName": "flow",
        "episode": "ESPECIAL TOLKIEN e SENHOR DOS ANEIS",
        "videoId": "o5di2HQIyhc",
        "cover": "https://i.ytimg.com/vi/o5di2HQIyhc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5JkEUCwfomt75f7T88-QoSZI45g",
        "link": "https://www.youtube.com/watch?v=o5di2HQIyhc",
        "categories": ["Tolkien", "middle earth"]
    },
    {
        "podcastName": "flow",
        "episode": "NUNCA MAIS ERRE NOS SEUS TREINOS [+ Julio Balestrin]",
        "videoId": "vIRM1AC3kR4",
        "cover": "https://i.ytimg.com/vi/vIRM1AC3kR4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBJXLsW95xslto0hAzBD6xgcLyUNg",
        "link": "https://www.youtube.com/watch?v=vIRM1AC3kR4",
        "categories": ["saúde", "bodybuilder"]
    }
]
```

### 2. Filtrar episódios por nome de podcast

**Método:** GET  
**URL:** `/episodes?podcastName=<nome_do_podcast>`  
**Descrição:** Filtra os episódios retornados pelo nome do podcast. O parâmetro `podcastName` deve ser passado na query string.

#### Exemplo de resposta:

```json
[
    {
        "podcastName": "flow",
        "episode": "NUNCA MAIS ERRE NOS SEUS TREINOS [+ Julio Balestrin]",
        "videoId": "vIRM1AC3kR4",
        "cover": "https://i.ytimg.com/vi/vIRM1AC3kR4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBJXLsW95xslto0hAzBD6xgcLyUNg",
        "link": "https://www.youtube.com/watch?v=vIRM1AC3kR4",
        "categories": ["saúde", "bodybuilder"]
    }
]
```

## Como Funciona

### Estrutura do Código

A aplicação é estruturada de forma simples, com um servidor HTTP que manipula as requisições e responde com os dados dos podcasts. As rotas e métodos estão definidos no arquivo de rotas e a lógica de manipulação das requisições é feita nos controladores.

#### Exemplo de código (arquivo principal):

```typescript
import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-method";

export const app = async (
    request: http.IncomingMessage,
    response: http.ServerResponse
) => {
    const baseUrl = request.url?.split("?")[0];

    // Listar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    // Filtrar episódios por nome de podcast
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
}
```

### Detalhamento das Funções

- **`getListEpisodes`**: Função responsável por listar todos os episódios de podcasts, organizados em categorias.
- **`getFilterEpisodes`**: Função que filtra os episódios com base no nome do podcast, permitindo que o usuário procure por episódios específicos.

### Como Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    start:dev
    ```

4. Acesse a aplicação via navegador ou ferramenta de API (como Postman):
    - Para listar os episódios: `GET http://localhost:3000/episodes`
    - Para filtrar por nome de podcast: `GET http://localhost:3000/episodes?podcastName=<nome_do_podcast>`

## Contribuindo

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça as alterações e envie para o repositório (`git push origin feature/nome-da-feature`).
4. Abra um pull request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.