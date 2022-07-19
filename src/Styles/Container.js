import styled from "styled-components"

const Container = styled.div`
  display:flex;
//   margin:0 2rem;
  justify-content: ${props => props.layout === `bar` && `space-between`};
  flex-direction: ${props => props.direction === `col` ? `column` : `row`};
  margin-left: ${props => props.margin && props.margin }
  
  `

export default Container