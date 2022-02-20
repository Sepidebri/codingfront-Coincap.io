import ChartBottom from "./chartBottom";
import ChartMiddle from "./chartMiddle";
import ChartTop from "./chartTop";
import Style from "./style";


export function Chart(){
    return(
        <Style>
            <ChartTop/>
            <ChartMiddle/>
            <ChartBottom/>
        </Style>
    )
};
export default Chart;