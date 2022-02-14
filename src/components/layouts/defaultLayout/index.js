import { Fragment } from "react";
import Footer from "components/footer";
import Header from "components/header";

export function DefaultLayout(props){
    const {children} = props;
    return(
        <Fragment>
            <Header/>
                {children}
            <Footer/>
        </Fragment>
    )
}
export default DefaultLayout;