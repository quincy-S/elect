import React , {useState} from "react"
import styled from "styled-components"
import Card from "./components/Card"
import Section from "./Styles/Section"


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
      <Section layout ="bar">
        <Button onClick={addCandidate}>add</Button>
        <Button onClick={delCandidate}>remove</Button>
      </Section>
      <Section layout = "grid">
        <Card number={number}/>
      </Section>
    </>
  )
}

export default App