const express = require('express')
const router = new express.Router()
const randomBoard = require('../utils/randomBoard')
const randomToken = require('../utils/randomToken')
const {dbSession} = require('../database/session')
const algoSolver = require('../utils/solver')
const auth = require('../middleware/auth')

router.post('/games', async (req, res) => {
    const body = req.body
    if (body.duration == null || body.random == null || body.duration === '')
        return res.status(400).send("Invalid Request Body Format!")
    try {
        if (body.random == false){
            if (body.board != null && body.board != ""){
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
                const board = algoSolver.loadDefaultBoard()
                const prevHighest = await dbSession.getHighestGameID()
                await dbSession.createGame(randomToken(prevHighest + 1), board, body.duration)

                const gameCreated = await dbSession.getGameById(prevHighest + 1)
                if (!gameCreated)
                    throw new Error("No game was created!")
            
                res.status(201).send(gameCreated)
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

router.put('/games/:id', auth, async (req, res) => {
    try {
        const body = req.body
        const game = req.game
        if (!body.word)
            return res.status(400).send("No Word!")
        const pointAwarded = algoSolver.getPointForWord(body.word, game.board)
        if (pointAwarded != 0){
            await dbSession.increasePointForGame(game.id, pointAwarded)
        }
        const gamePoint = await dbSession.getPointForGame(game.id)
        if (gamePoint == undefined)
            throw new Error("Cannot get game point!")
        await dbSession.updateTimeForGame(game.id)
        const timeLeft = await dbSession.getTimeLeftForGame(game.id)
        if (timeLeft === undefined)
            throw new Error("Cannot get time left!")
        if (timeLeft == 0)
            return res.status(400).send("The game is over!")
        //even if there's an incorrect word, still need to update the time for the game!
        if (pointAwarded == 0) {
            return res.status(400).send("Incorrect Word!")
        }
        res.status(200).send({
            id: game.id,
            token: body.token,
            duration: game.duration,
            board: game.board,
            points: gamePoint,
            time_left: timeLeft
        })
    }
    catch (e){
        console.log(e)
        res.status(500).send(e.message)
    }
})

router.get('/games/:id', async (req, res) => {
    try {
        const game = await dbSession.showTheGame(req.params.id)
        if (!game)
            throw new Error("Game Not Found!")
        res.status(200).send(game)
    }
    catch (e){
        console.log(e)
        res.status(404).send(e.message)
    }
})

module.exports = router