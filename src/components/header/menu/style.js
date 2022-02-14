import styled from "styled-components";

export const Style = styled.div `
    ul{
        display:flex;
        li{ 
            a{
                padding:25px;
                display:inline-block;
                color:rgba(0,0,0,.87);
                &:hover{
                    cursor: pointer;
                    background: rgba(0,0,0,.03);
                    color: rgba(0,0,0,.95);
                }
            }
        }
    }
`;
export default Style;