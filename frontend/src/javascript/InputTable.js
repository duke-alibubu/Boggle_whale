import React from 'react';

export class InputTable extends React.Component {
    render() {
        return (
            <div id="input-table">
                <table>
                    <tr>
                        <td>
                            <label for="game_duration">Duration: </label>
                            <input type="number" id="game_duration" name="game_duration" value="180000" />
                            <span>ms</span>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Random Board? </span>
                            <div class="radio">
                                <label><input type="radio" name="rd_yes" checked />Yes</label>
                            </div>
                            <div class="radio">
                                <label><input type="radio" name="rd_no" />No</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="board_input">Board: </label>
                            <textarea id="board_input" name="board_input" value="T, A, P, *, E, A, K, S, O, B, R, S, S, *, X, D" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="load_input" onclick="">Load Input</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
