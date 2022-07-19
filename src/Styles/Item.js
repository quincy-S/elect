import styled from "styled-components";

const Item = styled.div`
  border-radius:50%;
  background-color:red;
  width:200px;
  height:200px;
  font-size:70px;
  display:flex;
  justify-content:center;
  align-items:center;

  &:hover {
    opacity:0.5;
  }
`

export default Item