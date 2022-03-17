import Style from "./style";
import api from "utils/api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "antd";

export function ChartBottom(){
    const time =['m1', 'm5', 'm15', 'm30', 'h1', 'h2', 'h6', 'h12', 'd1'];

    function renderFarmTime(){
        return time.map((item) => {
            return(
                <Button key={item.indexOf} type="link" value="small" shape="round">{item}</Button>
            )
        });
    }; 
    return(
        <Style>
            <div>{renderFarmTime()}</div>
        </Style>
    )
};
export default ChartBottom;