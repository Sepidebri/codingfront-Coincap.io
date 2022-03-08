import Style from "./style";
import  Chart  from "chart.js/auto";
import api from "utils/api";
import { useEffect, useState } from "react";
import timestampToHour from "utils/api/timestampToTime";
import { Link, useParams } from "react-router-dom";
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
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  

  
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
            label: 'Dataset 1',
            data: manipulatePrice(),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
    
    function changeToAmPm(){
        const time = new Date();
        time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    };
    return(
        <Style>
        <Line options={options} data={data} />
        </Style>
    )
};
export default ChartMiddle;