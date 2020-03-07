import React from 'react';

export class WorldBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            duration: this.props.duration,
            token: this.props.token,
            id: this.props.id,
            word_list: [],
            points: 0,
            word_concat: ""
        }
        this.submitWord = this.submitWord.bind(this)
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.duration > 0) {
                this.setState(({ duration }) => ({
                    duration: duration - 1
                }))
            }
            else {
                clearInterval(this.myInterval)
            }
        }, 1)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            duration: nextProps.duration,
            token: nextProps.token,
            id: nextProps.id,
            word_list: [],
            points: 0,
            word_concat: ""
        })
        this.myInterval = setInterval(() => {
            if (this.state.duration > 0) {
                this.setState(({ duration }) => ({
                    duration: duration - 1
                }))
            }
            else {
                clearInterval(this.myInterval)
                //send a sample PUT request with empty word to end the game
                const url = 'http://localhost:8000/games/' + this.state.id
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "token": this.state.token,
                        "word": "1"
                    })
                });
            }
        }, 1)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    async submitWord(){
        //only check if the game duration is > 0 and the word is not present in the word list
        this.word.value = this.word.value.toUpperCase()
        if (this.state.duration > 0 && !this.state.word_list.includes(this.word.value)){
            try {
                const url = 'http://localhost:8000/games/' + this.state.id
                const rawResponse = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "token": this.state.token,
                        "word": this.word.value
                    })
                });
                const content = await rawResponse.json();
                if (content.points > this.state.points){
                    //update the state only if the user got a correct word that gives a point lareger than 0
                    this.setState(({
                        points: content.points,
                        word_list: this.state.word_list.concat(this.word.value)
                    }))
                    this.setState({
                        word_concat: this.state.word_list.join(", ")
                    })
                }
                
            }
            catch (e) {
                console.log(e)
            }
        }
    }
    render() {
        return (
            <div>
                <div id="play_board">
                    <div>
                        <div id = "timer_word">Timer: </div>
                        <div id="timer_box">{this.state.duration}</div>
                    </div>
                    <div>
                        <br />
                        <label htmlFor="word_input">Enter a word: </label>
                        <input type="text" id="game_duration" ref={(word) => this.word = word} name="game_duration" />
                        <button id="submit_word" onClick={this.submitWord}>Submit</button>
                    </div>
                    <div>
                        <p>Points: {this.state.points}</p>
                    </div>
                </div>
                <div id="word_board">
                    Found Word: {this.state.word_concat}
                </div>
            </div>
        );
    }
}