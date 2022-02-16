import { Fragment } from "react"
import { Link } from "react-router-dom"

export function NotFound(){
    return(
        <Fragment>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <p>404</p>
        </Fragment>    
    )
}
export default NotFound