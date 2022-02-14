import styled from "styled-components";

export const Style = styled.div `
    a{
        display:block;
        padding:20px;
        img{
            display:block;
            width:80px;
            height: auto;
        }
        &:hover{
            display:block;
            cursor: pointer;
            background: rgba(0,0,0,.03);
            color: rgba(0,0,0,.95);
        }
    }
`;
export default Style;