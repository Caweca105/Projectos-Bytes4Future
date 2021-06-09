import express from 'express';

const app = express();
const port = 3001;
const DB_FILE = "db.json"

app.use(express.json());

app.get("/api", (req, res) => res.send('Working'))

app.get("/api/messages", async (req, res) => {
    try {
        const conteudo = await fs.readFile(DB_FILE)
        const db = JSON.parse(conteudo.toString())

        res.status(200).json({messages: db.messages})
    } catch (err) {
        res.status(500).send('Erro a ler as mensagens')
    }
})

app.post('/api/messages', async (req, res) => {
    try{
        // ler o ficheiro
        const conteudo = await fs.readFile(DB_FILE)
        const db = JSON.parse(conteudo.toString())

        console.log(req.body)

        const {name, message} = req.body
        if (!name || !message) throw "Campos obrigatórios" 
        
        // adicionar ao array a mensagem recebida
        db.messages.push(req.body)

        // gravar o array novamente no ficheiro
        await fs.writeFile(DB_FILE, JSON.stringify(db, null, 2))

        // no final enviar o estado 201
        res.sendStatus(201)

    } catch (err) {
        res.status(500).send("Erro a adicionar mensagem")
    }
    
    
})

app.listen(3001, () => console.log(`ready on ${port}`));