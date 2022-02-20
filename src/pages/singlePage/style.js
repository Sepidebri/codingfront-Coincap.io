import styled from "styled-components";

export const Style = styled.div `
    .color{
        background-image: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246));
        padding-bottom:20px;
        .top-segment{
            padding-top:85px;
            h1, h2, h3, p, div{
                color:#ffffff;
            }
            .flag{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                .flag-top{
                    width: calc(100% + 20px);
                    height: 10px;
                    border-radius: 8px;
                    background: rgb(24, 198, 131);
                }
                .flag-bottom{
                    background: rgb(24, 198, 131);
                    border-bottom-right-radius: 16px;
                    border-bottom-left-radius: 16px;
                    padding:0 15px 8px 15px;
                    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
                    h1{
                        text-align: center;
                    }
                    p{
                        font-size: 10px;
                    }
                }
            }
            .log-price{
                // .log-price-inner-left{
                //     h1{
                //         span{

                //         }
                //     }
                // }
                .log-price-inner-right{
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    span{
                        // h2{

                        // }
                        // h3{

                        // }
                        &:first-child{
                            padding-right:10px;
                        }
                    }
                }
            }
            .ant-descriptions-item-content{
                display:flex;
                flex-direction:column;
                .inner-content-left-top{
                    margin-bottom:20px;
                    .title{
    
                    }
                    .content{
                        font-weight: 700;
                        font-size:18px;
                    }
                }
                button{
                    background: rgb(24, 198, 131);
                    transition: transform 0.2s ease 0s;
                    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
                    font-weight:600;
                    border:none;
                    &:hover{
                        transform: translateY(-2px);
                    }
                }
            }
            .inner-content-middle-top{
                margin-bottom:20px;
                .title{

                }
                .content{
                    font-weight: 700;
                    font-size:18px;
                }
            }
            button{
                transition: transform 0.2s ease 0s;
                box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
                background: rgb(24, 198, 131);
                font-weight:600;
                border:none;
                &:hover{
                    transform: translateY(-2px);
                }
            }
            .inner-content-right{
                .title{

                }
                .content{
                    font-weight: 700;
                    font-size:18px;
                }
            }
        }  
    }
    }
`;
export default Style;