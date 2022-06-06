import styled from '@emotion/styled'

export const ImageBox = styled.div`
   position: relative;
   text-align: center;
   cursor: pointer;
   height: 100%;

   background-color: ${({ type }) =>
      type === 'normal' && '#a8a432' ||
      type === 'grass' && '#97f582' ||
      type === 'poison' && '#90f3f5' ||
      type === 'bug' && '#c97bb3'
   };

`

export const Image = styled.img`
   width: 120px;
   height: 120px;
`
