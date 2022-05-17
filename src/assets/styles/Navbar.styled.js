import styled from '@emotion/styled';


export const NavigationBar = styled.nav`
    padding: 40px 0;
`

export const WrapNav = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    justify-content: space-around;

    ul {
        display: flex;
        list-style: none;
        
        li {
            margin: 0 20px;

            a {
                text-decoration: none;
                color: blue;
                &:hover {
                    color: black;
                }
            }
        }
    }
`

export const WrapImg = styled.div`
    img {
        width: 200px;
        align-self: center;
    }
`