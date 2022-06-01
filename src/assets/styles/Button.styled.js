import styled from '@emotion/styled'

export const Button = styled.button`
   border-radius: 15px;
   border: none;
   background-color: blue;
   color: white;
   width: 200px;
   margin: 20px;
   padding: 10px;
   cursor: pointer;

   :hover {
      background-color: black;
   }

   ${(props) =>
      props.absolute
         ? 'position: absolute ; left: 50%; transform: translateX(-50%); bottom: 10px; margin: 0'
         : ''}
`
