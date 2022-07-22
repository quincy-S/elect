import styled from "styled-components"

const Section = styled.section`
  display:flex;
  justify-content: ${props => props.layout === `bar` && `space-between`};
  flex-direction: ${props => props.direction === `col` ? `column` : `row`};
  margin-left: ${props => props.margin && props.margin };
  background-color: ${props => props.bg && props.bg};
`

export default Section