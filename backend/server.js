const express = require('express');
const app = express();
const cors = require('cors');
const { getDados } = require('./services/api');

app.use(cors()); 

const PORT = 3000;

app.get('/countries', async (req, res) => {
    try {
        const dados = await getDados();
        
        console.log('dados'); 
        res.json(dados);
        
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar dados no servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
