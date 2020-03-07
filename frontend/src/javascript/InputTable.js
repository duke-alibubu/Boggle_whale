import React from 'react';

export class InputTable extends React.Component {
    constructor(props) {
        super(props)

        this.random = true
        this.loadInput = this.loadInput.bind(this)
        this.randomChange = this.randomChange.bind(this)
        this.state = {
            requestMessage: ""
        }
    }

    async loadInput() {
        try {
            const url = 'http://localhost:8000/games'
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "duration": this.duration.value,
                    "random": this.random,
                    "board": this.board.value
                })
            });
            const content = await rawResponse.json();
            
            var charArray = content.board.split(", ")
            var arr = []
            for (let i = 0; i < 4; i++) {
                var arr_element = []
                for (let j = 0; j < 4; j++) {
                    arr_element.push(charArray[4 * i + j])
                }
                arr.push(arr_element)
            }
            
            
            this.setState({
                requestMessage: ""
            })
            this.props.onChange(arr, content.duration, content.id, content.token)
        }
        catch (e) {
            this.setState({
                requestMessage: "Wrong Input Format!"
            })
            this.props.onChange([[],[],[],[]], 0, 0, 0, 0)
        }
    }

    randomChange(e) {
        this.random = !this.random
    }
    render() {
        return (
            <div id="input-table">
                <table>
                    <tr>
                        <td>
                            <label htmlFor="game_duration">Duration: </label>
                            <input type="number" id="game_duration" ref={(dur) => this.duration = dur} style = {{marginRight: 10}} name="game_duration" />
                            <span>ms</span>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Random Board? </span>
                            <select onChange={this.randomChange} >
                                <option value="A">Yes</option>
                                <option value="B">No</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="board_input">Board: </label>
                            <textarea id="board_input" name="board_input" ref={(board) => this.board = board} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="load_input" onClick={this.loadInput}>Play New Game</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>{this.state.requestMessage}</p>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
