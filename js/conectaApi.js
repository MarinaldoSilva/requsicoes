async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoCovertida = await buscaVideo.json();
    return conexaoCovertida;
}

export const conectaApi = {
    listaVideos
}



