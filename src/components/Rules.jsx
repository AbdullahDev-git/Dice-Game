import styled from "styled-components"
function Rules() {
  return (
    <RulesContainer>
        <h2>Rules to play this game : </h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>After clicking on  dice  if selected number is equal to dice number you will get same point as dice {""} </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RulesContainer>
  )
}
export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #fadede;
padding: 20px;
margin-top: 50px;
border-radius: 10px;


h2{
    font-size: 24px;    
}

.text{
    margin-top: 24px;
}
`;