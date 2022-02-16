import styled from "styled-components";

export const Style =styled.div`
    background: rgb(236, 239, 241);
        .position{
            padding:120px 0 30px 0;
            ul{
                margin-top: 120px;
                li{
                    a{
                        color: rgba(0, 0, 0, 0.9);
                    }
                }
            }
            .loading{
                margin-top:120px;
            }
            table{
                text-transform: capitalize;
                background: #fff;
                // border: 1px solid rgba(34,36,38,.15);
                box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px !important;
                border: none
                border-radius: 0.28571429rem;
                text-align: left;
                color: rgba(0,0,0,.87);
                border-collapse: separate;
                border-spacing: 0;
                font-weight:normal;
                a{
                    color: rgba(0,0,0,.87);
                }
                .center{
                    text-align:center;
                }
                .right{
                    text-align:right;
                }
                .font{
                    font-weight:400;
                }
            }
            button{
                transition: transform 0.2s ease 0s;
                box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
                background: rgb(24, 198, 131) ;
                color:#ffffff;
                font-weight:500;
                border:none;
                margin-top:30px;
                &:hover{
                    transform: translateY(-2px);
                    background: rgb(24, 198, 131) ;
        
                }
            }
        }
`;
export default Style;