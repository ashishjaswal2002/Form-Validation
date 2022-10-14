import styled from 'styled-components';

const Form = styled.form`
  display:flex;
  flex-direction:column;
  text-align:center;
  padding:5px;
  color:white;
  


  &{
    width:50%;
    margin:12px auto;
    

  }

  & label{
    margin-top:1px;
  }
  & input{
    margin-top:12px;
    padding:2px;
  }
  & button{

    width:40%;
    margin:17px auto;
    font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
  }
   button:hover{
    background: #741188;
    border-color: #741188;
  }
   button:active{
    background: #741188;
    border-color: #741188;

  }
   button:focus{
    outline:none;
  }

`

export default Form;