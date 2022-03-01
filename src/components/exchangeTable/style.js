import styled from "styled-components";

export const Style = styled.div`
    padding: 48px 0;
    background: rgb(236, 239, 241);
    table{
        box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
    }
    button{
        transition: transform 0.2s ease 0s;
        box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
        background: rgb(24, 198, 131) ;
        color:#ffffff;
        font-weight:500;
        border:none;
        margin-top:20px;
        
        &:hover{
            transform: translateY(-2px);
            background: rgb(24, 198, 131) ;
        }    
    }
`;
export default Style;
