import express from 'express'

//Backend Variable
const app = express()
const port = 3000

//Backend Endpoint
app.get('/', (req, res) => {res.send('Api is live')})

//Backend listening to the port
app.listen(port, () => console.log(`Server is live on port ${port}`))