const express = require('express')
const port = process.env.port
const app = express()
const boggleRouter = require('../routers/boggleRouter')

app.use(express.json())
app.use(boggleRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})