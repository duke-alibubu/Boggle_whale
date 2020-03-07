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
        const currentTime = Date.now()
        await this.executeSQL(
            `INSERT INTO game(token, board, duration, points, time_left, created_at)
            VALUES ("${token}", "${board}", ${duration}, 0, ${duration}, ${currentTime})`
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

    async showTheGame(id){
        const out = await this.executeSQL(
            `SELECT * FROM game WHERE id = ${id}`
        )
        if (out.length >= 1){
            return {
                id: out[0][0],
                token: out[0][1],
                duration: out[0][3],
                board: out[0][2],
                points: out[0][4],
                time_left: out[0][5]
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
    async increasePointForGame(id, point){
        await this.executeSQL(
            `UPDATE game
            SET points = points + ${point}
            WHERE id = ${id}`
        )
    }
    async getPointForGame(id){
        const out = await this.executeSQL(
            `SELECT points FROM game WHERE id = ${id}`
        )
        if (out.length >= 1){
            return out[0][0]
        }
        else return undefined
    }
    async updateTimeForGame(id){
        await this.executeSQL(
            `UPDATE game
            SET time_left = 
            CASE WHEN duration >  ${Date.now()} - created_at THEN duration + created_at - ${Date.now()}
            ELSE 0 END
            WHERE id = ${id}`
        )
    }

    async getTimeLeftForGame(id){
        const out = await this.executeSQL(
            `SELECT time_left FROM game WHERE id = ${id}`
        )
        if (out.length >= 1){
            return out[0][0]
        }
        else return undefined
    }
}

const dbSession = new Session()
module.exports = {dbSession};