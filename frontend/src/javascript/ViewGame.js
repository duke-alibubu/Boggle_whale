import React from 'react';

export class ViewGame extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
        this.loadGameResult = this.loadGameResult.bind(this)
    }
    async loadGameResult(){
        if (this.gid){
            try {
                const url = 'http://localhost:8000/games/' + this.gid.value
                const rawResponse = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                const content = await rawResponse.json();
                this.setState({
                    gid: content.id,
                    token: content.token,
                    board: content.board,
                    duration: content.duration,
                    time_left: content.time_left,
                    points: content.points
                })
            }
            catch(e){
                console.log(e)
                this.setState({
                    gid: undefined,
                    token: undefined,
                    board: undefined,
                    duration: undefined,
                    time_left: undefined,
                    points: undefined
                })
            }
        }
    }
    componentWillUnmount(){
        this.setState({
            gid: undefined,
            token: undefined,
            board: undefined,
            duration: undefined,
            time_left: undefined,
            points: undefined
        })
    }
    render(){
        return (
            <div>
                <div id="game-result-holder">
                    <div>
                        <br />
                        <label htmlFor="game_id">Enter the game ID:  </label>
                        <input type="number" id="game_id" ref={(gid) => this.gid = gid} style = {{marginRight: 10}} name="game_id"/>
                        <button id="submit_gid" onClick={this.loadGameResult}>Enter</button>
                    </div>
                    <div id="gid-result">
                        <p>Game ID: {this.state.gid}</p>
                        <p>Token: {this.state.token}</p>
                        <p>Game Board: {this.state.board}</p>
                        <p>Duration: {this.state.duration}</p>
                        <p>Time Left: {this.state.time_left}</p>
                        <p>Points: {this.state.points}</p>
                    </div>
                </div>
            </div>
        );
    }
}