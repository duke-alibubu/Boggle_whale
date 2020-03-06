import React from 'react';
import {InputTable} from './InputTable'

export class GameBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            board_array: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
        }
    }
    render() {
        return (
            <div >
                <div id="board-content">
                    <div className="game-board">
                        <div className="game-box">{this.state.board_array[0]}</div>
                        <div className="game-box">{this.state.board_array[1]}</div>
                        <div className="game-box">{this.state.board_array[2]}</div>
                        <div className="game-box">{this.state.board_array[3]}</div>
                        <div className="game-box">{this.state.board_array[4]}</div>
                        <div className="game-box">{this.state.board_array[5]}</div>
                        <div className="game-box">{this.state.board_array[6]}</div>
                        <div className="game-box">{this.state.board_array[7]}</div>
                        <div className="game-box">{this.state.board_array[8]}</div>
                        <div className="game-box">{this.state.board_array[9]}</div>
                        <div className="game-box">{this.state.board_array[10]}</div>
                        <div className="game-box">{this.state.board_array[11]}</div>
                        <div className="game-box">{this.state.board_array[12]}</div>
                        <div className="game-box">{this.state.board_array[13]}</div>
                        <div className="game-box">{this.state.board_array[14]}</div>
                        <div className="game-box">{this.state.board_array[15]}</div>
                    </div>
                </div>
                <InputTable />
            </div>
        );
    }
}