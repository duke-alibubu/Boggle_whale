const express = require('express')
const router = new express.Router()
const randomBoard = require('../utils/randomBoard')
const randomToken = require('../utils/randomToken')
const {dbSession} = require('../database/session')
const algoSolver = require('../utils/solver')

router.post('/games', async (req, res) => {
    const body = req.body
    if (body.duration == null || body.random == null)
        return res.status(400).send("Invalid Request Body Format!")
    try {
        if (body.random == false){
            if (body.board != null){
                if (!algoSolver.validateBoardString(body.board)){
                    return res.status(400).send("Wrong format of board!")
                }
                const prevHighest = await dbSession.getHighestGameID()
                await dbSession.createGame(randomToken(prevHighest + 1), body.board, body.duration)

                const gameCreated = await dbSession.getGameById(prevHighest + 1)
                if (!gameCreated)
                    throw new Error("No game was created!")
            
                res.status(201).send(gameCreated)
            }
            else {
                //load the default board
            }
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