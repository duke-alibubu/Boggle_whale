const randomBoard = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ*"
    var charArr = []
    for (i = 0; i < 16; i++)
        charArr.push(characters.charAt(Math.floor(Math.random() * characters.length)))
    return charArr.join(", ")
}

module.exports = randomBoard