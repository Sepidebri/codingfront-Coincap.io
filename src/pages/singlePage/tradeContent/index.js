import Style from './style';
import Chart from './chart';
import TradeInstru from './tradeInstrument';

export function TradeContent(){
    return(
        <Style>
            <div className="container flex">
                    <div className="chart">
                        <Chart/>
                    </div>
                    <div className="trade-instrument">
                        <TradeInstru/>
                    </div>
                </div>
        </Style>
    );
};
export default TradeContent;