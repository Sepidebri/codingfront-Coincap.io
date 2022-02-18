import { Col, Row} from "antd";
import Style from "./style";
import CoincapMenu from "./coincapMenu";
import LegalMenu from "./legalMenu";
import Disclaimer from "./disclaimer";
import SocialMenu from "./socialMenu";
import CoincapApp from "./coincapApp";

export function Footer(){
    return(
        <Style>
            <div className="container">
                <Row>
                    <Col span={6}><CoincapMenu/></Col>
                    <Col span={6}>
                        <div><LegalMenu/></div>
                        <div><Disclaimer/></div>
                    </Col>
                    <Col span={6}><SocialMenu/></Col>
                    <Col span={6}><CoincapApp/></Col>
                </Row>
            </div>
        </Style>
    );
};
export default Footer;