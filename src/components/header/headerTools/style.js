import styled from "styled-components";

export const Style = styled.div `
    ul{
        display:flex;
        align-items: baseline;
        li{
            &:nth-child(1), &:nth-child(2){
                a{
                    color:#000000;
                    padding:25px;
                }
            }
            a{
                padding: 20px;
                display:inline-block;
                Button{
                    background:rgb(24, 198, 131);
                    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
                    transition: transform 0.2s ease 0s;
                    text-alig:center;
                    border:none;
                    font-weight:500;
                    &:hover{
                        transform: translateY(-2px);
                        background:rgb(24, 198, 131); 
                    }
                }
            }
        }
    }
`;
export default Style;