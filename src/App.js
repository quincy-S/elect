import React , {useState} from "react"
import styled from "styled-components"
import Card from "./components/Card"
import Container from "./Styles/Container"


const Button = styled.button`
`



const App = () => {

  const [number, setNumber] = useState(1)

  function delCandidate(){
    if(number>1){
      let copy = number
      setNumber(copy-1)
    }
  }
  
  function addCandidate(){
    let copy = number
    setNumber(copy+1)
  }

  return(
    <>
      <Container layout ="bar">
        <Button onClick={addCandidate}>add</Button>
        <Button onClick={delCandidate}>remove</Button>
      </Container>
      <Container layout = "grid">
        <Card number={number}/>
      </Container>
    </>
  )
}

export default App