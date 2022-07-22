import styled from "styled-components"

const Form = styled.form`
    margin-top:0.5rem;
    visibility: ${props => props.show == 1 ? `visible`: `hidden`};
    
    button{
        padding:0.25rem 0.8rem;
        background-color:red;
        border:none;
        color:white;
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
    }

`

export default Form