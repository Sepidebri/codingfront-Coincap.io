import Style from './style';
import { SettingFilled } from '@ant-design/icons';
import { Select, BackTop  } from 'antd';
import { useState, useEffect } from 'react';
import api from "utils/api";
import { Link, useParams } from "react-router-dom";


export function TradeInstru(){
    const { Option } = Select;
    const [assets, setAssets] = useState([]);
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(function(){
        async function getApi(){
            try{
                const response = await api.get('assets');
                const responseI = await api.get(`assets/${id}`);
                setItem(responseI.data.data);
                setAssets(response.data.data);
            }catch(e){
            }
        }
        getApi();
    }, []);
    function renderFarm(){
        return assets.map(function(item){
            return(
                <Option key={item.id}>{item.symbol}</Option>
            )
        });
    }
    function handleChange(value) {
    console.log(`selected ${value}`);
    };
    function changeValue(){
        // if (defaultValue === "Select a token"){
        //     defaultValue === item.id
        // }else if(defaultValue === item.id ){
        //     defaultValue === "Select a token"
        // };
    };
    return(
        <Style>
                <div className='header-swapper'>
                    <h3>Swap</h3>
                    <SettingFilled />
                </div>
                <div className='header-middle'>
                    <div className='header-middle-swapper'>You Sell</div>
                    <div className='header-middle-swapper-content'>
                        <div className='assets-crypto'>0</div>
                        <div className='render'>
                        <Select  defaultValue="Select a token" bordered={false} style={{ width: 250 }} onChange={handleChange}>
                            {renderFarm()}
                        </Select>
                        </div>
                    </div>
                </div>
                <div onClick={changeValue()} className='changer'><img src='/images/shuffle-arrows-symbol-svgrepo-com.svg'/></div>
                <div className='header-middle'>
                    <div className='header-middle-swapper'>You Get</div>
                    <div className='header-middle-swapper-content'>
                        <div className='assets-crypto'>0</div>
                        <div className='render'>
                        <Select defaultValue='BTC' bordered={false} style={{ width: 250 }} onChange={handleChange}>
                            {renderFarm()}
                        </Select>
                        </div>
                    </div>
                </div>
                <div className='flex'><button>Connect Wallet</button></div>
        </Style>
    );
};
export default TradeInstru;