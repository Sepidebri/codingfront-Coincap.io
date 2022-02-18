import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import Style from "./style";

export function CoincapApp(){
    return(
        <Style>
            <div className="header-content">COINCAP APP AVAILABLE ON</div>
            <div className="logo-app">
                <Link to="https://play.google.com/store/apps/details?id=io.coinCap.coinCap">
                    <img src="/images/google_play.svg"/>
                </Link>
            </div>
            <div className="logo-app">
                <Link to="https://itunes.apple.com/us/app/coincap/id1074052280?mt=8&ign-mpt=uo%3D4">
                    <img src="/images/apple_store.svg"/>
                </Link>
            </div>
        </Style>
    )
}
export default CoincapApp;