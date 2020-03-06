import React from 'react';

export class InputTable extends React.Component {
    constructor(props) {
        super(props)
    
        this.random = true
        this.loadInput = this.loadInput.bind(this)
        this.randomChange = this.randomChange.bind(this)
    }

    loadInput(){
        console.log(this.duration.value, this.random)
    }

    randomChange(e){
        this.random = !this.random
    }
    render() {
        return (
            <div id="input-table">
                <table>
                    <tr>
                        <td>
                            <label htmlFor="game_duration">Duration: </label>
                            <input type="number" id="game_duration" ref={(dur) => this.duration=dur}  name="game_duration" value="180000" />
                            <span>ms</span>
                            <br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Random Board? </span>
                            {/* <div class="radio">
                                <label><input type="radio" name="randomize" ref={(a) => this.random=true} checked />Yes</label>
                            </div>
                            <div class="radio">
                                <label><input type="radio" name="randomize" ref={(b) => this.random=false} />No</label>
                            </div> */}
                            <select onChange={this.randomChange} >
                                <option value="A">Yes</option>
                                <option value="B">No</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="board_input">Board: </label>
                            <textarea id="board_input" name="board_input" value="T, A, P, *, E, A, K, S, O, B, R, S, S, *, X, D" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="load_input" onClick={this.loadInput}>Load Input</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
