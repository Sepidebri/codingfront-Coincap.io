import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Style } from "./style";

export function NotFound(){
    return(
        <Style>
            <Col>
                <Row align="middle" justify="center">
                <Row align="middle" justify="center" >
                    <Col><div className="error">404</div></Col>
                    <Col><div className="error-content">This page could not be found.</div></Col>
                </Row>
                </Row>
                <Row align="middle" justify="center">
                <nav>
                    <Link to="/"><span className="return-home"><span className="home-contet">Home</span><span><h6>click on me!</h6></span></span></Link>
                </nav>
                </Row>
            </Col>
        </Style>
    )
}
export default NotFound