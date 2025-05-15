const BASE_URL = 'https://countries-api-abhishek.vercel.app/countries';

// api/api.js
async function getDados() {
    try {
        const fetch = (await import('node-fetch')).default; // importa��o din�mica
        const resposta = await fetch(BASE_URL);

        if (!resposta.ok) {
            throw new Error('Falha ao buscar dados da API externa');
        }

        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
        throw erro;
    }
}

module.exports = { getDados };