import styled from "styled-components";

export const Style = styled.div `
    ul{
        display:flex;
        align-items: baseline;
        li{
            cursor:pointer;
            &:nth-child(1){
                display:flex;
                justify-content:center;
                align-items:center;
                transition: all 1s;
                margin-right:0.5rem;
                &:hover{
                    border-color:#000000;
                    box-shadow:0 0 0 2px #000000;
                }
                &:hover input{
                    display:block;
                }
                height:50%;
                input{
                    display:none;
                    border:none;
                    &.ant-input:focus{
                        border-color:#ffffff;
                        box-shadow:none;
                    }
                } 
                a{
                    color:#000000;
                    padding:0 25px;
                }
            }
            &:nth-child(2){
                a{
                    color:#000000;
                    padding:25px;
                }
                #check-box{
                    display:none;
                    &:checked{
                        ~ {
                            .wrapper-setting{
                                display:block;
                            }
                            label{
                                .close{
                                    left: 65.9%;
                                }
                            }
                        }
                        
                    }
                }
                .close-open{
                    .open{
                        cursor: pointer;
                    }
                    .close{
                        position: fixed;
                        font-size: 1.5rem;
                        cursor: pointer;
                        left: -1000rem;
                        padding:.3rem 0.6rem;
                        z-index: 201; 
                    }
                }
                .wrapper-setting{
                        display:none;
                        position: absolute;
                        width: 150vw;
                        height: 100vh;
                        background: rgba( 255, 255, 255, 0.45 );
                        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                        backdrop-filter: blur( 6px );
                        -webkit-backdrop-filter: blur( 6px );
                        border-radius: 10px;
                        border: 1px solid rgba( 255, 255, 255, 0.18 );
                        left: -90vw;
                        top: -1%;
                        z-index: 200;
                    span{
                        padding:0;
                    }
                    section{
                        padding-top:1%;
                        width: 15rem;
                        position: relative;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 3rem;
                        .ant-checkbox-wrapper{
                            display: flex;
                            flex-direction: row-reverse;
                            span:nth-child(2){
                                margin: 0 auto 0 0;
                            }
                        }
                        header{
                            display: flex;
                            align-items: center;
                            margin-bottom:1rem;
                            font-size: 3rem;
                            .setting-header{
                                padding-right:0.5rem;
                            }
                        }
                        // div{
                        //     font-size: 1.5rem;
                        //     span{
                        //         font-size: 1.2rem;
                        //     }
                        // }
                        &{
                            > {
                                div{
                                    margin-bottom:1rem;
                                    font-size: 1.2rem;
                                    .ant-select-borderless{
                                        > {
                                            .ant-select-selector{
                                                padding:0;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
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