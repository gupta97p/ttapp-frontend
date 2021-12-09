import React from "react";
import '../styles/profile.css';

// value = {detail:Object};

export default function Profile (props, detail){
    const check = () => {
        console.log(detail)
        document.getElementById("test").innerText = props
    }
    return(
        <div className="profile-container"> 
        <p id="test"> </p>
            <button onClick={check}> click</button>
        </div>
    );
}
// {message: 'Welcome piyush', user_id: 1, user_group: 'player', data: {…}, token: '5f1beddc2b0ed77c6980b4a113d740c47b548440'}
