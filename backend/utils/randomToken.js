const jwt= require('jsonwebtoken')

const randomToken = (id) => {
    return jwt.sign({ _id: id.toString()}, process.env.JWT_SECRET)
}

module.exports = randomToken