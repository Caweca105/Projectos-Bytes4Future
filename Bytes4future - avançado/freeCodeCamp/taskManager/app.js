const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

//middleware 
app.use(express.json())

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks);


const port = 3000;

const start = async () => {
    try {
        await connectDB()
        app.listen(port, console.log(`Camões está a ouvir-te na porta ${port}...`))
    } catch (error) {
        console.log(error)
    }
} 

start()