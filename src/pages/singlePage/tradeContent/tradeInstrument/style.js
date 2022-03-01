import styled from "styled-components";

export const Style =styled.div`
padding: 20px 20px ;
height: 420px;

    .header-swapper{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom: 17px;
        h3{
            font-size: 20px;
            font-weight: 600;
        }
        span{
            svg{
                display:block;
                font-size:20px;
            }
        }
    }
    .header-middle{
        border-radius: 12px;
        padding: 14px;
        border: 1px solid rgb(236, 239, 241);
        background: rgb(249, 249, 249);
        .header-middle-swapper{
            font-weight: 600;
            color: rgba(0, 0, 0, 0.6);
            font-size:14px;
        }
        .header-middle-swapper-content{
            display:flex;
            div{
                &:first-child{
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.6);
                    font-size:25px;
                }
                .ant-select-selector{
                    &:hover{
                        color: rgb(22, 171, 113);
                        cursor: pointer;
                    }
                }
                
            }
        }
    }
    .changer{
        img{
            margin: 16px 0px 16px 20px;
            max-width: 25px;
            display: block ;
            color: rgb(24, 198, 131);
            cursor: pointer;
        }
    }
    .flex{
        margin-top:
        display:flex;
        align-items:center;
        justify-content:center;
        button{
            display: block;
            width: 100%;
            background-color: rgb(24, 198, 131);
            color: rgb(255, 255, 255);
            font-weight: 700;
            border: 1px solid rgb(24, 198, 131);
            border-radius: 60px;
            padding: 15px;
            margin-top: 20px;
            font-size: 20px ;
        }
    }
`;
export default Style;