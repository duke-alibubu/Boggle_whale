const jwt= require('jsonwebtoken')

const randomToken = (thisId) => {
    return jwt.sign({ id: thisId}, process.env.JWT_SECRET)
}

module.exports = randomToken