import Style from "./style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "utils/api";

export function ChartTop(){
    const [item, setItem] = useState({});
    const {id} = useParams();
    useEffect(function(){
        async function getApi(){
            try{
                const response = await api.get(`assets/${id}`);
                setItem(response.data.data);
            }catch(e){

            }
        };
        getApi();
    }, []);
    function formatDate(){
        const dateObj = new Date();
        const month = dateObj.toLocaleString('default', { month: 'long' });
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        return `${day} ${month} ${year}`;
    };
    function roundChange(){
        return Math.round((item.changePercent24Hr) * 100) / 100
    };
    function numColor(props){
        if(item.changePercent24Hr > 0){
            return <h3 id="change-color" style={{color:"#09c048"}}>{roundChange()}% </h3> ;
        }else if(item.changePercent24Hr < 0){
            return <h3 id="change-color" style={{color:"rgb(244, 67, 54)"}}>{roundChange()}% </h3> ;
        }else{
            return <h3 id="change-color" style={{color:"#000000"}}>{roundChange()}%</h3>;
        }
    };
    return(
        <Style>
            <div className="left-content">
                <div>{item.name} ({item.symbol})</div>
                <div>{formatDate()}</div>
            </div>
            <div className="right-content">
                <div className="right-content-left">
                    <div>HIGH</div>
                    <div>LOW</div>
                </div>
                <div className="right-content-right">
                    <div>AVERAGE</div>
                    <div><span>CHANGE</span>{numColor()}</div>
                </div>
            </div>
        </Style>
    )
};
export default ChartTop;