import React from 'react';
import { Link } from 'react-router-dom';

export class MenuBar extends React.Component {
    render() {
        return (
            <div id="menu_bar">
                <div>
                    <div id="intro-boggle">
                        <h1>Boogle Whale</h1>
                    </div>
                    <div id="intro-text" align="center">
                        <p>Another version of Boggle - by Trinh Tuan Dung</p>
                    </div>
                </div>
                <Link to="/" style={{ margin: 20 }} >
                    <button className="link_button"> Play the Game! </button>
                </Link>
                <Link to="/view">
                    <button className="link_button"> Show History </button>
                </Link>
            </div>
        );
    }
}