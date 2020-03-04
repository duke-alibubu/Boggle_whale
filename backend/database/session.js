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
}

const dbSession = new Session()
module.exports = {dbSession};