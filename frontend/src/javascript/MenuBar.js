import React from 'react';
import { Link} from 'react-router-dom';

export class MenuBar extends React.Component {
    render(){
        return (
            <div id="menu_bar">
                <Link to="/">Play the Game!</Link>
                <Link to="/view"> Show History</Link>
            </div>
        );
    }
}