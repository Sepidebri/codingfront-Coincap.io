import styled from "styled-components";

export const Style =styled.div`
margin-bottom:50px;
    button{
        margin-right:5px;
        color:rgb(24,198,131);
        font-weight:600;
        &:hover{
            background: rgb(24, 198, 131);
            color: #ffffff;
        }
        &.ant-btn-link{
            color:rgb(24,198,131);
            &:hover{
                color: #ffffff;
            }
        }
    }
`;
export default Style;