import Style from "./style";
import api from "utils/api";
import { useEffect, useState } from "react";
import timestampToHour from "utils/timestampToTime";
import {useParams } from "react-router-dom";
import { Button } from "antd";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
    layout: {
        padding: {
            top:20,
            right:40,
            bottom:20
        }
    },
};
    
export function ChartMiddle(){
    const [assets, setAssets] = useState([]);
    const [item, setItem]= useState({});
    const {id} = useParams();
    const timeframes =['m1', 'm5', 'm15', 'm30', 'h1', 'h2', 'h6', 'h12', 'd1'];
    const [timeframe, setTimeframe] = useState('d1');
    useEffect(function(){
        async function getApi(){
            try{
                const response = await api.get(`assets/${id}/history?interval=${timeframe}`);
                const responseI = await api.get(`assets/${id}`);
                setAssets(response.data.data);
                setItem(responseI.data.data);
            }catch(e){
            }
        }
        getApi();
        setTimeframe(timeframe);
    }, [timeframe]);
    
    function renderFarmTime(){
        return timeframes.map((item) => {
            return(
                <Button key={item.indexOf} onClick={() => setTimeframe(item)}  type="link" value="small" shape="round">{item}</Button>
            )
        });
    }; 
    function manipulateTime(){
        return assets.map((item) => {
            return timestampToHour(item.time)
        })
    };
    function manipulatePrice(){
        return assets.map((item) => {
            return item.priceUsd
        })
    };
    const labels = manipulateTime();
    const data = {
        labels,
        datasets: [
            {
                label:item.symbol,
                data: manipulatePrice(),
                borderColor: '#f44336',
                backgroundColor: '#fdd9d7',
                fillColor: '#fdd9d7'
            },
        ],
    };
    return(
        <Style>
        <Line options={options} data={data} />
        {renderFarmTime()}
        </Style>
    )
};
export default ChartMiddle;