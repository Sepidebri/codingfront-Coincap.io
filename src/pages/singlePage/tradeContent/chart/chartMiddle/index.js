import Style from "./style";
import api from "utils/api";
import { useEffect, useState } from "react";
import timestampToHour from "utils/timestampToTime";
import {useParams } from "react-router-dom";
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
    const [timeframe, setTimeframe] = useState({});
    const {id} = useParams();
    useEffect(function(){
        async function getApi(){
            try{
                const response = await api.get(`assets/${id}/history?interval=${timeframe}`);
                const responseI = await api.get(`assets/${id}`);
                console.log(response);
                setAssets(response.data.data);
                setItem(responseI.data.data);
            }catch(e){
            }
        }
        getApi();
    }, []);
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
        </Style>
    )
};
export default ChartMiddle;