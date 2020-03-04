const jwt = require('jsonwebtoken')
const {dbSession} = require('../database/session')

const auth = async (req, res, next) => {
    try {
        const token = req.body.token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        //the 'tokens.token' part is used to authorize the current token to see if it's still valid.
        const game = await dbSession.getGameById(decoded.id)
        if (!game || req.params.id != decoded.id){
            throw new Error()
        }
        req.game = game
        next()
    }
    catch (e) {
        res.status(401).send({error: 'Unauthenticated game!'})
    }
}
module.exports = auth