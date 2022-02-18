import { Col, Row} from "antd";
import { FacebookFilled, TwitterOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Style from "./style";

export function SocialMenu(){
    return(
        <Style>
            <div className="header-content">FOLLOW US</div>
            <div className="logo">
                <Link to="https://twitter.com/CoinCap_io"><TwitterOutlined/></Link>
                <Link to="https://www.facebook.com/watch/?v=365220420785166"><FacebookFilled /></Link>
            </div>
        </Style>
    )
}
export default SocialMenu;