import express from 'express';

const app = express();

app.get("/api", (req, res) => res.send('Working'))

app.listen(3001, () => console.log('listening on port 3001'));