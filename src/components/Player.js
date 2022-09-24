import React from "react";
import "./Style.css"

function Player({playerNum,gameScore}){

    console.log("value in player.js",{gameScore});

    return(
    <div className="playersDetails">
        <h1 id="player">Player {playerNum}</h1>
        <h2 id="score">Score</h2>
        <span id="scoreValue">{gameScore}</span>
    </div>

)}

export default Player;