import { useEffect, useState } from 'react';
import api from 'utils/api';
import Style from './style';
import { Table, Row, Col, Button } from 'antd';
import { useParams } from "react-router-dom";


export function ExchangeTable(){
    const [market, setMarket] = useState([]);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const {id} = useParams();
    const columnsObject =[
        {
            title: 'Exchange',
            dataIndex: 'exchangeId' ,
            key: 'exchangeId',
            sorter: (a, b) => a.rank - b.rank,
            render: text => <p className="center">{text}</p>,
        },
        {
            title: 'Pair',
            dataIndex: `baseSymbol/quoteSymbol`,
            key: `baseSymbol/quoteSymbol`,
            
        },
        {
            title: 'Price',
            dataIndex: 'priceUsd',
            key: 'priceUsd',
            sorter: (a, b) => a.priceUsd - b.priceUsd,
            render: text => <p className="center">${Math.round((text) * 100) / 100}</p>,
        },
        {
            title: 'Volume(24Hr)',
            dataIndex: 'volumeUsd24Hr',
            key: 'volumeUsd24Hr',
            render: text => <p className="center">${Math.round((text) * 100) / 100}</p>,
        },
        {
            title: 'Volume',
            dataIndex: 'volumePercent',
            key: 'volumePercent',
            render: text => <p className="center">{Math.round((text) * 100) / 100}%</p>,
        }
        
    ]
    useEffect (function(){
        async function getApi(){
            try{
                const response = await api.get(`assets/${id}/markets`, {limit:limit, offset:offset});
                setMarket(response.data.data);
            }catch(e){

            }
        }
        getApi();
    },[]);
    async function loadMore(){
        try{
            setOffset(offset + 10);
            const response = await api.get("assets", {limit:limit, offset: offset +10 });
            setMarket(market.concat(response.data.data));
        }catch(e){

        }
    };

    return(
        <Style>
            <div className='container'>
                <Table columns={columnsObject} dataSource={market} pagination={false}/>
                <Row justify="center" align="middle">
                    <Col>
                        <Button onClick={loadMore} type="primary" shape="round">view more</Button>
                    </Col>
                </Row>
            </div>
        </Style>
    )
};
export default ExchangeTable;