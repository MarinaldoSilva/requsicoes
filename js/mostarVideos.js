import { conectaApi } from "./conectaApi";
const lista = document.querySelector("[data-lista]");//agora podemos manipular o <ul></ul> do html

//função para criar os <li></li>
function constraiCard() {
    const video = document.createElement("li");//cria um <li></li>
    video.className = "videos__item";//adiciona a classe no elemento li
    //dentro do elemento <li class='videos__item'> adicionamos o video
    video.innerHTML = `<iframe width="100%" height="72%" src="https://www.youtube.com/embed/pA-EgOaF23I"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="./img/logo.png" alt="logo canal alura">
                <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
                <p>236 mil visualizações</p>`;
    return video;//vamos retornar o valor da variavel video
}

async function listaVideo() {
    const lista = conectaApi.listaVideos();
}