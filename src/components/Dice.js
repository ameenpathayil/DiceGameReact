import React from "react";
import "./Style.css"

function Dice({imageSrc,chance}) {
  

console.log("image value in dice.js",{imageSrc,chance})

  return (
    <div className="Dice">
      <div className="diceImage">
      <img src={require(`./image/${imageSrc}`)} id="diceImage" alt="diceimage" />
      </div>
      <h2 id="playerChance">{chance}</h2>      
    </div>
  );
}
export default Dice;
