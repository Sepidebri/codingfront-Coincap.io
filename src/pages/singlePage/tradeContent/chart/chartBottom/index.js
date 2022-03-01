import Style from "./style";
import api from "utils/api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function ChartBottom(){
    const [assets, setAssets] = useState([]);
    const {id} = useParams();
    useEffect(function(){
        async function getApi(){
            try{
                const response = await api.get(`assets/${id}/markets`);
                console.log(response);
                setAssets(response.data.data);
            }catch(e){
            }
        }
        getApi();
    }, []);
    return(
        <Style>
            <p>bottom</p>
        </Style>
    )
};
export default ChartBottom;