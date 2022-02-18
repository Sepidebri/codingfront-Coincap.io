import { Col, Row} from "antd";
import { Link } from "react-router-dom";
import Style from "./style";

export function LegalMenu(){
    return(
        <Style>
            <div className="header-content">COINCAP.IO</div>
            <ul className="menu-content">
                <li>
                <Link to="/">Methodology</Link>
                </li>
                <li>
                <Link to="/">Support</Link>
                </li>
                <li>
                <Link to="/">Our AP</Link>
                </li>
                <li>
                <Link to="/">Rate Comparison</Link>
                </li>
                <li>
                <Link to="/">Careers</Link>
                </li>
            </ul>
        </Style>
    )
}
export default LegalMenu;