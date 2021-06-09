import express from 'express';

const app = express();
const port = 3001;

app.get("/api", (req, res) => res.send('Working'))

app.post('/api/messages', (req, res) => {
    // ler o ficheiro
    // adicionar ao array a mensagem recebida
    // gravar o array novamente no ficheiro

    // no final enviar o estado 201

})

app.listen(3001, () => console.log(`ready on ${port}`));