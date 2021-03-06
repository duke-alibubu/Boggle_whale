import React from 'react';
import {InputTable} from './InputTable'
import { WorldBoard } from './WordBoard';

export class GameBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            board_array: [[],[],[],[]]
        }
        this.userSubmit = this.userSubmit.bind(this)
    }

    userSubmit(arr, duration, id, token){
        this.setState({
            board_array: arr,
            duration: duration,
            id: id,
            token: token
        })
        // console.log(this.state)
        // this.render()
        //this.props.gameData = {duration, id, token}
    }
    render() {
        return (
            <div >
                <div id="board-content">
                    <div className="game-board">
                        <div className="game-box">{this.state.board_array[0][0]}</div>
                        <div className="game-box">{this.state.board_array[0][1]}</div>
                        <div className="game-box">{this.state.board_array[0][2]}</div>
                        <div className="game-box">{this.state.board_array[0][3]}</div>
                        <div className="game-box">{this.state.board_array[1][0]}</div>
                        <div className="game-box">{this.state.board_array[1][1]}</div>
                        <div className="game-box">{this.state.board_array[1][2]}</div>
                        <div className="game-box">{this.state.board_array[1][3]}</div>
                        <div className="game-box">{this.state.board_array[2][0]}</div>
                        <div className="game-box">{this.state.board_array[2][1]}</div>
                        <div className="game-box">{this.state.board_array[2][2]}</div>
                        <div className="game-box">{this.state.board_array[2][3]}</div>
                        <div className="game-box">{this.state.board_array[3][0]}</div>
                        <div className="game-box">{this.state.board_array[3][1]}</div>
                        <div className="game-box">{this.state.board_array[3][2]}</div>
                        <div className="game-box">{this.state.board_array[3][3]}</div>
                    </div>
                </div>
                <InputTable onChange={this.userSubmit}/>
                <WorldBoard duration ={this.state.duration} id={this.state.id} token={this.state.token}/>
            </div>
        );
    }
}