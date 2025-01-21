const express = require('express');
const request = require('request');  
const app = express();

app.use(express.static('public'));

app.get('/api/cotacoes', (req, res) => {
    const moedas = 'USD-BRL,EUR-BRL,BTC-BRL';
    const options = {
        url: `http://economia.awesomeapi.com.br/json/last/${moedas}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    };

    request(options, (erro, resposta, corpo) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao obter dados da API' });
        }

        let json = JSON.parse(corpo);
    
        res.json(json);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
