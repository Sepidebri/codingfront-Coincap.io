import styled from "styled-components";

export const Style =styled.div`
    background: rgb(236, 239, 241);
    .back-banner{
        margin-top: 28px ;
        background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255) ;
        border: none ;
        padding-bottom: 150px ;
        position:relative;
        top:0;
        left:0;
        width:100%;
        .back-banner-pos{
            padding:80px 30px 0 30px;
            font-size:16px;
            color:#ffffff;
            .value{
                font-size:30px;
            }
        }    
    }
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
        .ant-table-content{
            background:rgb(236, 239, 241);
            table{
                text-transform: capitalize;
                background:#ffffff;
                // border: 1px solid rgba(34,36,38,.15);
                box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px !important;
                border: none
                border-radius: 0.28571429rem;
                text-align: left;
                color: rgba(0,0,0,.87);
                border-collapse: separate;
                border-spacing: 0;
                font-weight:normal;
                position:relative;
                top:-120px;
                left:0;
                width:100%;  
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
        }
        button{
            transition: transform 0.2s ease 0s;
            box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
            background: rgb(24, 198, 131) ;
            color:#ffffff;
            font-weight:500;
            border:none;
            position:relative;
            top:-60px;
            bottom:0;
            
            &:hover{
                transform: translateY(-2px);
                background: rgb(24, 198, 131) ;
    
            }
        }
`;
export default Style;