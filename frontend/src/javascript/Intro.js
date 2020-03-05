import React from 'react';

export class Intro extends React.Component {
    render(){
        return (
            <div id="intro">
                <img alt = "profileimg" id="profile_img" src= {require("../images/profile.jpg")}/>
                <span id="my_name">Trinh Tuan Dung <br></br> (Or you can call me Duke) </span>   
            </div>
        );
    }
}