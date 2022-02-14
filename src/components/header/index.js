import { Fragment } from "react";
import HeaderTools from "./headerTools";
import Logo from "./logo";
import Menu from "./menu";
import {Row, Col} from "antd";
import Style from "./style";


export function Header(){
    return(
        <Style>
            <div className="header">
                <div className="container">
                    <Row justify="space-between" align="middle">
                        <Col>
                            <Menu/>
                        </Col>
                        <Col>
                            <Logo/>
                        </Col>
                        <Col>
                            <HeaderTools/>
                        </Col>
                    </Row>    
                </div>   
            </div>
        </Style>
    )
}
export default Header;