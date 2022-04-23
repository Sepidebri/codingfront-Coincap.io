import { Button } from "antd";
import { useEffect, useState } from "react";

export function renderFarmTime(){
    const timeframes =['m1', 'm5', 'm15', 'm30', 'h1', 'h2', 'h6', 'h12', 'd1'];
    
    return timeframes.map((item) => {
        return(
            <Button key={item.indexOf}   type="link" value="small" shape="round">{item}</Button>
        )
    });
}; 
export default renderFarmTime;