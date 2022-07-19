import React , {useState} from "react"
import editImg from "../images/pen-to-square-solid.svg"
import Container from "../Styles/Container"
import Item from "../Styles/Item"
import Image from "../Styles/Image"
import Text from "../Styles/Text"
import Input from "../Styles/Input"
import Form from "../Styles/Form"

const Card =(props)=>{

  const [input, setInput] = useState("")
  const [showInput, setShowInput] = useState(false)
  const [cardName, setCardName] = useState({1:""})


  function handleText(id,event){
    let text = event.target.value
    setInput(text)
    let copy = cardName
    copy[id]=text
    setCardName(copy)
  }

  function handleInputField(){
    setShowInput(!showInput)
    console.log(showInput)
  }
  
  function addItemName(event){
    event.preventDefault()
  }

  return(
    <>
      {[...Array(props.number)].map((el,idx) => 
      <Container margin="2rem" direction ="col" key={idx}>
        <Image src={editImg} onClick={handleInputField}/>
        <Item onClick={()=>console.log(idx+1)} key={idx}>
          <Text>{cardName[idx+1]}</Text>
        </Item>
        <Form show = {showInput}>
          <Input
            onChange={(event)=>handleText(idx+1,event)}/>
            <button onClick={addItemName}>done</button>
        </Form>
      </Container>)}
    </>
  )
}

export default Card