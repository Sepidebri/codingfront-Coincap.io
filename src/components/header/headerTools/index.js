import { Link } from "react-router-dom";
import { Button, Input, Checkbox, Menu, Dropdown, Select} from "antd";
import {SearchOutlined, SettingFilled, CloseOutlined, DownOutlined } from "@ant-design/icons";
import api from "utils/api";
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';


import Style from "./style";

export function HeaderTools(){
    const { Option } = Select;
    const [rates, setRates]= useState([]);
    useEffect(function(){
        async function getApi(){
            try{
                const responseI = await api.get('rates');
                setRates(responseI.data.data);
            }catch(e){
            }
        }
        getApi();
    }, []);
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    };
    function renderFarm(){
        return rates.map(function(item){
            return(
                <Option key={item.id}>{item.symbol}</Option>
            )
        });
    }
    function handleChange(value) {
        console.log(`selected ${value}`);
    };
    return(
        <Style>
            <ul>
                <li>
                    <Input placeholder="search here..." />
                    <Link to="/" className="search-btn"><SearchOutlined/></Link>
                </li>
                <li>
                    <input type='checkbox' id="check-box"/>
                    <label for="check-box" class="close-open">
                    <SettingFilled className="open" />                    
                    <CloseOutlined className="close" />
                    </label>
                    <div className="wrapper-setting">
                        <section>
                            <header>
                                <SettingFilled className="setting-header"/>
                                <p>Settings</p>
                            </header>
                            <div className="dark-theme">
                                <Checkbox onChange={onChange}>Dark Theme</Checkbox>
                            </div>
                            <div className="flasher">
                                <Checkbox>Flash Price Indicators</Checkbox>
                            </div>
                            <div className="fiat">
                                <Select defaultValue="USD"  bordered={false} style={{ width: 250 }} onChange={handleChange}>
                                    {renderFarm()}
                                </Select>
                            </div>
                            <div className="lang">
                                <Select defaultValue="English"  bordered={false} style={{ width: 250 }} onChange={handleChange}>
                                    {renderFarm()}
                                </Select>
                            </div>
                        </section>
                    </div>
                </li>
                <li>
                    <Link to="/">
                        <Button shape="round" type="primary">Connect Wallet</Button>
                    </Link>
                </li>
            </ul>
        </Style>
    )
}
export default HeaderTools;