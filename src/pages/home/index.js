import { useEffect, useState } from "react";
import DefaultLayout from "components/layouts/defaultLayout";
import api from 'utils/api';
import { Link } from "react-router-dom";
import Style from "./style";
import { Button, Table, Row, Col } from "antd";

export function Home(){
    const [loading, setLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    // const [rank, setRank] = useState(1);
    const columnsObject =[
        {
            title: 'Rank',
            dataIndex: 'rank' ,
            key: 'rank',
            sorter: (a, b) => a.rank - b.rank,
            render: text => <p className="center">{text}</p>,
        },
        {
            title: 'Name',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            render: text => <Link to={`/crypto/${text}`}>{text}</Link>,
        },
        {
            title: 'Price',
            dataIndex: 'priceUsd',
            key: 'priceUsd',
            sorter: (a, b) => a.priceUsd - b.priceUsd,
            render: text => <p className="center">{Math.round((text) * 100) / 100}</p>,
        },
        {
            title: 'Marcket Cap',
            dataIndex: 'marketCapUsd',
            key: 'marketCapUsd',
            sorter: (a, b) => a.marketCapUsd - b.marketCapUsd,
            render: text => <p className="center">{Math.round((text) * 100) / 100}</p>,
        },
        {
            title: 'VWAP(24Hr)',
            dataIndex: 'vwap24Hr',
            key: 'vwap24Hr',
            render: text => <p className="center">{Math.round((text) * 100) / 100}</p>,
        },
        {
            title: 'Suplly',
            dataIndex: 'supply',
            key: 'supply',
            render: text => <p className="center">{Math.round((text) * 100) / 100}</p>,
        },
        {
            title: 'Change(24Hr)',
            dataIndex: 'changePercent24Hr',
            key: 'changePercent24Hr',
            sorter: (a, b) => a.changePercent24Hr - b.changePercent24Hr,
            render: text => {
                return(
                    <p className="right" id="change-color">{Math.round((text) * 100) / 100}</p>
                )
            },
        },
    ]
    useEffect(function(){
        async function getApi(){
            try{
                setLoading(true);
                const response = await api.get('assets', {limit:limit, offset:offset});
                console.log(response);
                setAssets(response.data.data);
                setLoading(false);
            }catch(e){
                setLoading(false);
            }
        }
        getApi();
    }, []);
        
    function renderFarm(){
        return assets.map(function(item){
            return(
                <li key={item.id}><Link to={`/crypto/${item.id}`}>{item.id}</Link></li>
            )
        });
    }
    // function plusRank(){
    //     try{
    //         setRank(rank + 1);
    //         const response = await api.get("assets", {rank: rank + 1});
    //         setAssets(assets.concat(response.data.data));
    //     }catch(e){

    //     }
    // };
    async function loadMore(){
        try{
            setOffset(offset + 10);
            const response = await api.get("assets", {limit:limit, offset: offset +10 });
            setAssets(assets.concat(response.data.data));
        }catch(e){

        }
    }
    return(
        <DefaultLayout>
            <Style>
                <div className="container position">
                    <div className="loading" style={{display: loading ? "block" : "none"}}>loading...</div>
                    {/* <ul>
                    {renderFarm()}
                    </ul> */}
                    <Table columns={columnsObject} dataSource={assets} pagination={false}/>
                    <Row justify="center" align="middle">
                        <Col>
                            <Button onClick={loadMore} type="primary" shape="round">view more</Button>
                        </Col>
                    </Row>
                </div>
            </Style>
        </DefaultLayout>
    )
}
export default Home