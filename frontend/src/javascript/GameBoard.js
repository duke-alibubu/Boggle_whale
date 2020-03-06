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
                    <div class="game-board">
                        <div class="game-box">{this.state.board_array[0]}</div>
                        <div class="game-box">{this.state.board_array[1]}</div>
                        <div class="game-box">{this.state.board_array[2]}</div>
                        <div class="game-box">{this.state.board_array[3]}</div>
                        <div class="game-box">{this.state.board_array[4]}</div>
                        <div class="game-box">{this.state.board_array[5]}</div>
                        <div class="game-box">{this.state.board_array[6]}</div>
                        <div class="game-box">{this.state.board_array[7]}</div>
                        <div class="game-box">{this.state.board_array[8]}</div>
                        <div class="game-box">{this.state.board_array[9]}</div>
                        <div class="game-box">{this.state.board_array[10]}</div>
                        <div class="game-box">{this.state.board_array[11]}</div>
                        <div class="game-box">{this.state.board_array[12]}</div>
                        <div class="game-box">{this.state.board_array[13]}</div>
                        <div class="game-box">{this.state.board_array[14]}</div>
                        <div class="game-box">{this.state.board_array[15]}</div>
                    </div>
                </div>
                <InputTable />
            </div>
        );
    }
}