const mysqlx = require("@mysql/xdevapi")

const options = {
    host: "localhost",
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PWD,
    schema: "boggle"
}

const Session = class {
    constructor() {
        this.session = mysqlx.getSession(options)
    }
    async executeSQL(text) {
        const session = await this.session;
        const result = await session.sql(text).execute();
        return result.fetchAll();
    }

    async createGame(token, board, duration){
        await this.executeSQL(
            `INSERT INTO game(token, board, duration, points, time_left)
            VALUES ("${token}", "${board}", ${duration}, 0, ${duration})`
        )
    }
    async getGameById(id){
        const out = await this.executeSQL(
            `SELECT * FROM game WHERE id = ${id}`
        )
        if (out.length >= 1){
            return {
                id: out[0][0],
                token: out[0][1],
                duration: out[0][3],
                board: out[0][2]
            }
        }
        else return undefined
    }

    async getHighestGameID(){
        const out = await this.executeSQL("SELECT max(id) FROM game")
        if (out.length >= 1)
            return out[0][0]
        else return 0
    }
}

const dbSession = new Session()
module.exports = {dbSession};