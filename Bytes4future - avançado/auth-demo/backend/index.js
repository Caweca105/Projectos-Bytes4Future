import express from "express";

const PORT = 3001
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
        res.status(200).json({
            message: "Working"
    })
})

app.post("/auth", (req, res) => {
    const session = sessions.length
    sessions.push(session)
    res.status(200).json({token: })
})

app.get("/user", (req, res) => {
    const auth = req.headers.authorization
    console.log(auth)
    if (auth) {
        if (sessions.includes(parseInt(auth))) {
            res.status(200).json({message: auth})
        } else {
            res.sendStatus(404)
        }
    } else {
        res.sendStatus(401)
    }
})

app.listen()