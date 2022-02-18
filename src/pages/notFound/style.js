import styled from "styled-components";

export const Style =styled.div`
    text-align:center;
    margin-top:10%;
    .error{
    border-right: 1px solid rgba(0, 0, 0,.3);
    margin: 0;
    margin-right: 20px;
    padding: 10px 23px 10px 0;
    font-size: 24px;
    font-weight: 500;
    }
    .error-content{
    font-size: 14px;
    font-weight: normal;
    line-height: inherit;
    margin: 0;
    padding: 0;
    }
    a{
        color:#a1ca1c;
        .return-home{
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            .home-contet{
                padding-right:10px;
            }
        }
    }
` 