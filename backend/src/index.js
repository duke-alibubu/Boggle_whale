const express = require('express')
const port = process.env.port
const app = express()
const boggleRouter = require('../routers/boggleRouter')

//bypass CORS proxy
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});
app.use(express.json())
app.use(boggleRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})