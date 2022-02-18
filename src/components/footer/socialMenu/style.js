import styled from "styled-components";

export const Style = styled.div `
    .header-content{
        margin-bottom:10px;
        font-weight:700;
    }
    .logo{
        a{
            dispaly:inline-block;
            svg{
                display:inline-block;
                font-size:22px;
                color:#ffffff90;
                margin-right:10px;
            }
            &:hover svg{
                color:#ffffff;
            }
        }
    }
`;
export default Style;