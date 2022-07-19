import styled from "styled-components"

const Form = styled.form`
    margin-top:0.5rem;
    visibility: ${props => props.show ? `visible`: `hidden`};
    

    button{
        background-color:red;
        border-color:red;
        border:none;
        color:white;
        border-radius-top-right:20px;
        border-radius-bottom-right:20px;
    }

`

export default Form