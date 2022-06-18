import styled from 'styled-components'

export const Input = styled.input`
   width: 350px;
   height: 100px;
   border-radius: 20px;
   font-size: 50px;
   border: 1px solid red;
   &:focus {
      outline: none;
      box-shadow: rgba(0, 0, 0, 1) 0px 3px 8px;
   }
`
