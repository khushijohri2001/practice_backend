import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Server is Ready")
})

app.get('/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            name: "joke 1"
        },
        {
            id: 2,
            name: "joke 2"
        },
        {
            id: 3,
            name: "joke 3"
        },
        {
            id: 4,
            name: "joke 4"
        },
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server at Localhost: ${port}`)
})