import { useState } from "react"
import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { Button } from "../styled/Button"
import { OutlineButton } from "../styled/Button"
import Rules from "./Rules"
function GamePlay() {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const[currentDice, setCurrentDice] = useState(1);
    const [error, setError] =useState();
    const [showRules, setshowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if(!selectedNumber) {

            setError("You have not selected any number");
            return;
        }
        
        const randomNumber = generateRandomNumber(1,7);

        setCurrentDice((prev) => randomNumber);


        if(selectedNumber == randomNumber){
            setScore(prev => prev + randomNumber);
        }
        else{
            setScore(prev => prev - 2);
        }

        setSelectedNumber(undefined);
    };


    const resetScore = () => {
        setScore(0);
    }



  return (
    <MainContainer>
       <div className="top_section">
       <TotalScore score={score} />
       <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber}
       setSelectedNumber={setSelectedNumber}
       />
       </div>
       <RoleDice currentDice={currentDice}
       roleDice={roleDice}/>
       <div className="btns">
        <OutlineButton
        onClick={resetScore}
        >Reset Score</OutlineButton>
        <Button onClick={() => setshowRules(prev => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
       </div>

       {showRules && <Rules/>}
    </MainContainer>
  )
}
export default GamePlay


const MainContainer = styled.main`
padding: 55px;

    .top_section{
        display: flex;
        align-items: end;
        justify-content: space-between;
    }

    .btns{ 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top:40px ;
        margin-right: 315px;
        gap: 10px;
        
    }
`
