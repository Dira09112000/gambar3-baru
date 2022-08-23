import React from "react";
import "../css/Body.css";
import { MdNorthEast } from "react-icons/md";
import { MdSouthEast } from "react-icons/md";
import LineGraph from "./MarketCapGraph";

function MarketCap() {

    return  (
    <div className="MarketCapBody">
        <div className="MarketCap">
            <div className= "Bitcoin">
                <img className="MarketCapLogo" src="https://www.coincalculators.io/images/coin/bch.png" alt=""/>
                Bitcoin
                <div id="percentage">
                <MdNorthEast />
                2,4%</div>
                <div id="graph">
                <LineGraph />
                </div>
                <div id="money">
                $57314,30
                </div>
            </div>
            <div className="Etherum">
                <img className="MarketCapLogo" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" alt=""/>
                Ethereum
                <div id="percentage">  
                <MdSouthEast />
                0.8%</div>
                <div id="graph">
                <LineGraph />
                </div>
                <div id="money">
                $1968,09
                </div>
            </div>
            <div className="Litecoin">
                <img className="MarketCapLogo" src="https://cryptologos.cc/logos/litecoin-ltc-logo.png" alt=""/>
                Litecoin
                <div id="percentage">
                <MdNorthEast />
                1,1%</div>
                <div id="graph">
                <LineGraph />
                </div>
                <div id="money">
                $229,74
                </div>
            </div>
        </div>
    </div>
    )
}

export default MarketCap;