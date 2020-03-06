import React from 'react';

export class WorldBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            duration: this.props.duration,
            token: this.props.token,
            id: this.props.id
        }
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

    componentWillReceiveProps(nextProps){
        this.setState({
            duration: nextProps.duration,
            token: nextProps.token,
            id: nextProps.id
        })
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

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render(){
        return (
            <div id="word_board">
                <p>{this.state.duration}</p>
                <p>{this.state.token}</p>
            </div>
        );
    }
}