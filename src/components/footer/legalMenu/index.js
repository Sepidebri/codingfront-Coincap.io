import { Col, Row} from "antd";
import { Link } from "react-router-dom";
import Style from "./style";

export function LegalMenu(){
    return(
        <Style>
            <div className="header-content">LEGALS</div>
            <ul>
                <li>
                    <Link to="/">Terms of Service</Link>
                </li>
                <li>
                    <Link to="/">Privacy Policy</Link>
                </li>
            </ul>
        </Style>
    )
}
export default LegalMenu;