 import styled from "styled-components"

 function RoleDice({currentDice, roleDice }) {
 
  return (
    <DiceContainer>
        <div className="dice"  onClick={roleDice}>
            <img src={`/public/images/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}
export default RoleDice

const DiceContainer = styled.div`
margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
        font-weight: 600;
    }
`
