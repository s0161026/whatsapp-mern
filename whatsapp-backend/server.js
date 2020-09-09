// importing
import express from "express"
import mongoose from "mongoose"
import Messages from "./dbMessages.js"
import Pusher from "pusher"

// app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: '1069535',
    key: '6b4814de61684932d069',
    secret: '27752d4bcf2b429b7c4e',
    cluster: 'us2',
    encrypted: true
});

// listen and trigger pusher
const db = mongoose.connection
db.once('open', () => {
    console.log('DB is connected')

    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch()

    changeStream.on('change', (change) => {
        console.log('A change occured', change)
    })
})

// middlerware
app.use(express.json())

// DB config
const connection_url = 'mongodb+srv://admin:3u3Dk9dO8RyUKW7H@cluster0.k8yiq.mongodb.net/whatsappdb?retryWrites=true&w=majority' 
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// ????

// api routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))
