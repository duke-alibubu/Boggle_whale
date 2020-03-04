const express = require('express')
const router = new express.Router()
const randomBoard = require('../utils/randomBoard')
const randomToken = require('../utils/randomToken')
const {dbSession} = require('../database/session')

router.post('/games', async (req, res) => {
    const body = req.body
    if (body.duration == null || body.random == null)
        return res.status(400).send("Invalid Request Body Format!")
    try {
        if (body.random == false){

        }
        else {
            const game = {
                id: 1,
                token: randomToken(1),
                duration: body.duration,
                board: randomBoard()
            }
            await dbSession.createGame(randomToken(1), randomBoard(), body.duration)
            res.status(201).send(game)
        }
    }
    catch (e){
        console.log(e)
        res.status(500).send(e.message)
    }
})

router.put('/games/:id', async (req, res) => {
    try {

    }
    catch (e){
        
    }
})

router.get('/games/:id', async (req, res) => {
    try {

    }
    catch (e){
        
    }
})

module.exports = router