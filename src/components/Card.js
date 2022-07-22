import React, {useState} from "react"
import editImg from "../images/pen-to-square-solid.svg"
import Section from "../Styles/Section"
import Item from "../Styles/Item"
import Image from "../Styles/Image"
import Text from "../Styles/Text"
import Input from "../Styles/Input"
import Form from "../Styles/Form"

const Card =(props)=>{

  const [input, setInput] = useState("")
  const [cardName, setCardName] = useState({1:""})
  const [showInput, setShowInput] = useState({1:0})
  const [votes, setVotes] = useState({1:0})


  function handleText(id,event){
    let text = event.target.value
    setInput(text)
    let copy = cardName
    copy[id]=text
    setCardName({...copy})
  }

  function handleInputField(id){
    let copy = showInput
    if(copy[id]==0){
      copy[id]=1
    }
    else{
      copy[id]=0
    }
    setShowInput({...copy})
  }
  
  function addItemName(event,id){
    event.preventDefault()
    handleInputField(id)
  }

  function handleVote(id){
    let copy = votes
    if(!(id in copy)){
      copy[id]=0
    }
    copy[id]+=1
    setVotes({...copy})
    console.log(votes)
  }

  return(
    <>
      {[...Array(props.number)].map((el,idx) => 
      <Section margin="2rem" direction ="col" key={idx}>
        <Image src={editImg} onClick={()=>handleInputField(idx+1)}/>
        <Item onClick={()=>handleVote(idx+1)} key={idx}>
          <Text>{cardName[idx+1]}</Text>
        </Item>
        <Form show = {showInput[idx+1]}>
          <Input
            onChange={(event)=>handleText(idx+1,event)}/>
            <button onClick={(event)=>addItemName(event,idx+1)} type="submit">done</button>
        </Form>
      </Section>
      )}
    </>
  )
}

export default Card