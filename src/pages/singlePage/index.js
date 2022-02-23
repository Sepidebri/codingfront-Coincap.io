import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "utils/api";
import DefaultLayout from "components/layouts/defaultLayout";
import { Button, Col, Descriptions, Row } from 'antd';
import Style from "./style";
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import Chart from "./tradeContent/chart";
import TradeInstru from "./tradeContent/tradeInstrument";
import TradeContent from "./tradeContent";

export function SinglePage(){
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
    }, [])
    function roundPrice(){
        return Math.round((item.priceUsd) * 100) / 100
    };
    function roundChange(){
        return Math.round((item.changePercent24Hr) * 100) / 100
    };
    function roundMarketCap(){
        return Math.round((item.marketCapUsd) * 100) / 100
    };
    function roundVolume(){
        return Math.round((item.volumeUsd24Hr) * 100) / 100
    };
    function roundSupply(){
        return Math.round((item.supply) * 100) / 100
    };
    function numFormatter(num) {
        if(num > 999 && num < 1000000){
            return (num/1000).toFixed(2) + 'K'; // convert to K for number from > 1000 < 1 million 
        }else if(num < 1000000000  && num > 1000000){
            return (num/1000000).toFixed(2) + 'M'; // convert to M for number from > 1 million 
        }else if( num < 1000000000000 && num > 1000000000){
            return (num/1000000000).toFixed(2) + 'B'; // convert to B for number from > 1 billion
        }else if(num > 1000000000000){
            return ( num/1000000000000).toFixed(2) + 'T'; // convert to T for number from > 1 trillion 
        }else if(num < 900){
            return num; // if value < 1000, nothing to do
        }
    };
    function numColor(props){
        if(item.changePercent24Hr > 0){
            return <h3 id="change-color" style={{color:"#09c048"}}>{roundChange()}% <CaretUpOutlined /></h3> ;
        }else if(item.changePercent24Hr < 0){
            return <h3 id="change-color" style={{color:"#ee9d9d"}}>{roundChange()}% <CaretDownOutlined /></h3> ;
        }else{
            return <h3 id="change-color" style={{color:"#000000"}}>{roundChange()}%</h3>;
        }
    };
    return(
        <DefaultLayout>
            <Style>
                <div className="color">
                    <div className="container top-segment">
                        <Descriptions layout="vertical" column={5}>
                            <Descriptions.Item >
                                <div className="flag">
                                    <div className="flag-top"></div>
                                    <div className="flag-bottom">
                                        <h1>{item.rank}</h1>
                                        <p>RANK</p>
                                    </div>
                                </div>
                            </Descriptions.Item>
                            <Descriptions.Item >
                                <div className="log-price">
                                    <div className="log-price-inner-left">
                                        <h1>
                                            <span>{item.name}</span>
                                            <span>({item.symbol})</span>
                                        </h1>
                                    </div>    
                                    <div className="log-price-inner-right">
                                        <span><h2>${roundPrice()}</h2></span>
                                        <span>{numColor()}</span>
                                    </div>
                                </div>
                            </Descriptions.Item>
                            <Descriptions.Item >
                                <div className="inner-content-left-top">
                                    <div className="title">Market Cap</div>
                                    <div className="content">{numFormatter(roundMarketCap())}</div>
                                </div>
                                <Button type="primary" shape="round">Website</Button>
                            </Descriptions.Item>
                            <Descriptions.Item >
                                <div className="inner-content-middle-top">
                                    <div className="title">Volume (24Hr)</div>
                                    <div className="content">{numFormatter(roundVolume())}</div>
                                </div>
                                <Button type="primary" shape="round">Explorer</Button>
                            </Descriptions.Item>
                            <Descriptions.Item >
                                <div className="inner-content-right">
                                    <div className="title">Supply</div>
                                    <div className="content">{numFormatter(roundSupply())} {item.symbol}</div>
                                </div>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
                <TradeContent/>
            </Style>
        </DefaultLayout>
    )
};
export default SinglePage;