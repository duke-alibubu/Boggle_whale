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
            const board = randomBoard()
            const prevHighest = await dbSession.getHighestGameID()
            await dbSession.createGame(randomToken(prevHighest + 1), board, body.duration)

            const gameCreated = await dbSession.getGameById(prevHighest + 1)
            if (!gameCreated)
                throw new Error("No game was created!")
            
            res.status(201).send(gameCreated)
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