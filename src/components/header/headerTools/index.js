import { Link } from "react-router-dom";
import { Button} from "antd";
import {SearchOutlined, SettingFilled} from "@ant-design/icons";
import Style from "./style";

export function HeaderTools(){
    return(
        <Style>
            <ul>
                <li><Link to="/"><SearchOutlined/></Link></li>
                <li><Link to="/"><SettingFilled /></Link></li>
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