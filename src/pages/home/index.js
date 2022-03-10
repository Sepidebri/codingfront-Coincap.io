import { useEffect, useState } from "react";
import DefaultLayout from "components/layouts/defaultLayout";
import api from 'utils/api';
import { Link, useParams } from "react-router-dom";
import Style from "./style";
import { Button, Table, Row, Col, Space } from "antd";
import numFormatter from "utils/numFormatter";

export function Home(){
    const [loading, setLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    const [images, setImages] = useState({});
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const src = "@2x.png";
    const srcImg ="https://assets.coincap.io/assets/icons/";
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
            render: (text, record) => (
                <Space>
                    <span>
                        <Link  to={`/crypto/${text}`}>
                        <img src={`${srcImg}${record.symbol.toLowerCase()}${src}`} />
                        </Link>
                    </span>
                    <span>
                        <div className="name-head">
                        <Link to={`/crypto/${text}`}>{record.name}</Link>
                        </div>
                        <div className="symbol-content">
                        <Link to={`/crypto/${text}`}>{record.symbol}</Link>
                        </div>
                        
                    </span>
                </Space>
            ) ,
        },
        {
            title: 'Price',
            dataIndex: 'priceUsd',
            key: 'priceUsd',
            sorter: (a, b) => a.priceUsd - b.priceUsd,
            render: (text) => (
            <p className="center">${Math.round((text) * 100) / 100}</p>
            ),
        },
        {
            title: 'Marcket Cap',
            dataIndex: 'marketCapUsd',
            key: 'marketCapUsd',
            sorter: (a, b) => a.marketCapUsd - b.marketCapUsd,
            render: text => <p className="center">{numFormatter(Math.round((text) * 100) / 100)}</p>,
        },
        {
            title: 'VWAP(24Hr)',
            dataIndex: 'vwap24Hr',
            key: 'vwap24Hr',
            render: text => <p className="center">${Math.round((text) * 100) / 100}</p>,
        },
        {
            title: 'Suplly',
            dataIndex: 'supply',
            key: 'supply',
            render: text => <p className="center">{numFormatter(Math.round((text) * 100) / 100)}</p>,
        },
        {
            title: 'Change(24Hr)',
            dataIndex: 'changePercent24Hr',
            key: 'changePercent24Hr',
            sorter: (a, b) => a.changePercent24Hr - b.changePercent24Hr,
            render: text => (
                <p className="right" id="change-color" style={{color: text > 0 ? "#09c048" : text < 0 ? "rgb(244, 67, 54)" : "#000000"}}>{Math.round((text) * 100) / 100}%</p>
            ),
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
                <div className="back-banner">
                    <div className="container back-banner-pos">
                        <Row justify="space-between" align="middle">
                            <Col>
                                <Col>
                                    <Row justify="center" align="middle"><div className="label">MARCKET CAP</div></Row>
                                    <Row justify="center" align="middle"><div className="value">$2.00T</div></Row>
                                </Col>
                            </Col>
                            <Col>
                                <Col>
                                    <Row justify="center" align="middle"><div className="label">EXCHANGE VOL</div></Row>
                                    <Row justify="center" align="middle"><div className="value">$71.02B</div></Row>
                                </Col>
                            </Col>
                            <Col>
                                <Col>
                                    <Row justify="center" align="middle"><div className="label">ASSTES</div></Row>
                                    <Row justify="center" align="middle"><div className="value">2295</div></Row>
                                </Col>
                            </Col>
                            <Col>
                                <Col>
                                    <Row justify="center" align="middle"><div className="label">EXCHANGE</div></Row>
                                    <Row justify="center" align="middle"><div className="value">73</div></Row>
                                </Col>
                            </Col>
                            <Col>
                                <Col>
                                    <Row justify="center" align="middle"><div className="label">MARCKETS</div></Row>
                                    <Row justify="center" align="middle"><div className="value">18,123</div></Row>
                                </Col>
                            </Col>
                            <Col>
                                <Col>
                                    <Row justify="center" align="middle"><div className="label">BTC DOM INDEX</div></Row>
                                    <Row justify="center" align="middle"><div className="value">41.0%</div></Row>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="container">
                    <div className="loading" style={{display: loading ? "block" : "none"}}>loading...</div>
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