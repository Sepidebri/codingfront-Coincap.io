import styled from "styled-components";

export const Style =styled.div`
    .flex{
        display: flex;
        .chart{
            flex:70%;
        }
        .trade-instrument{
            flex:30%;
            border-radius: 13px;
            background: rgb(255, 255, 255);
            box-shadow: rgb(0 0 0 / 10%) 0px 0px 9px;
            position: relative;
            overflow: hidden;
            margin:60px 0;
        }
    }
`;
export default Style;