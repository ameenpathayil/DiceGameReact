import React,{useState} from "react";
import "./App.css";
import Player from "./components/Player";
import Dice from "./components/Dice";


function App() {


  const [score,setScore]=useState(0);
  const [count,setCount]=useState(0);
  const [randomNumber,setRandomNumber]=useState(0);
  const [image,setImage]=useState("roll-dice.gif");
  const [playerSelect,setPlayerSelect]=useState(true);
  const [player1,setPlayer1]=useState(0);
  const [player2,setPlayer2]=useState(0);
  const [playerChance,setPlayerChance]=useState("Player 1 Chance");
  let highScore=0;
  let winScore=25;


//Dicebutton function

  function DiceButton({ btnAction, buttonText }) {
          return (
                <div>
                  <button onClick={btnAction} id="diceButton">
                    {buttonText}
                  </button>
                </div>
          );
  };


  //Random number generator

  const RollDice = () => {

    
    let min = 1;
    let max = 6;
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("generated random number =",randomNum);
    setRandomNumber(randomNum);
    console.log("use state random number is=",randomNumber);
    let image = `${randomNum}.png`;
    console.log("image src generated text equivalent=",image);
    setImage(image);


    if(playerSelect===true){

      setPlayer1(player1+randomNum);
      setPlayerSelect(false);
      setPlayerChance("Player 2 Chance");

      if(player1>score){
        highScore=player1;
        console.log("high score=",highScore);
      }
      
    }

    if(player1>=winScore){
      setPlayerChance("Player 1 Win");
    }

    
    
    if(playerSelect===false){

      setPlayer2(player2+randomNum);
      setPlayerSelect(true);
      setPlayerChance("Player 1 Chance")

      if(player2>score){
        highScore=player2;
        console.log("high score=",highScore);
      }


    }

    if(player2>=winScore){
      setPlayerChance("Player 2 Win");
    }

  




  };


  //new game funcion

  const NewGame=()=> {

    setPlayer1(0);
    setPlayer2(0);
    setPlayerChance("Player 1 Chance");
    setImage("roll-dice.gif");
    setPlayerSelect(true);

    
  
  };


//main return

  return (
          <div className="container">
            <h1 id="mainHeading">Dice Game</h1>

            <div className="diceGame">
              <Player playerNum="1" gameScore={player1} />
              <div>
                    <Dice imageSrc={image} chance={playerChance}/>
                    <div id="diceArea">
                        <DiceButton btnAction={RollDice} buttonText="Roll Dice" />
                        <DiceButton btnAction={NewGame} buttonText="New Game" />
                    </div>
              </div>
              <Player playerNum="2" gameScore={player2} />
            </div>
          </div>
  );
}

export default App;
