import { Link } from "react-router-dom";
import Style from "./style";

export function Logo(){
    return(
        <Style>
            <Link to="/">
            <img src="images/logo.svg"/>
            </Link>
        </Style>
    )
}
export default Logo;