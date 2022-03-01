import Style from "./style";
import { Line } from 'react-chartjs-2';
import  Chart  from "chart.js/auto";
import { CategoryScale, Interaction } from "chart.js";
import api from "utils/api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

Chart.register(CategoryScale);
export function ChartMiddle(){
    const [assets, setAssets] = useState([]);
    const [item, setItem]= useState({})
    const {id} = useParams();
    useEffect(function(){
        async function getApi(){
            try{
                const response = await api.get(`assets/${id}/history?interval=d1`);
                const responseI = await api.get(`assets/${id}`);
                console.log(response);
                setAssets(response.data.data);
                setItem(responseI.data.data);
            }catch(e){
            }
        }
        getApi();
    }, []);
    function changeToAmPm(){
        const time = new Date();
        time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    };
    return(
        <Style>
        
        </Style>
    )
};
export default ChartMiddle;