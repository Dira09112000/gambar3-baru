import "../css/Body.css";
import Grafik from "./Grafik";
import { RiMessengerLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdExpandMore } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { TbBallVolleyball } from "react-icons/tb";
import {
  FiMoreHorizontal,
  FiArrowUpRight,
  FiArrowDownRight,
} from "react-icons/fi";
import MarketCap from "./MarketCap";
import PortGraph from "./Portofolio";

const Body = () => {
  return (
    <>
      <div className="container-all">
        {/* HEADER*/}
        <div className="header">
          <div
            style={{
              border: "solid 1px",
              width: "200px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "10px",
              padding: "5px",
            }}
          >
            <div>Search for something.....</div>
            <div>
              <BsSearch />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "200px",
              cursor: "pointer",
            }}
          >
            <div>
              <RiMessengerLine />
            </div>
            <div>
              <IoMdNotificationsOutline />
            </div>
            <div>
              <CgProfile />
            </div>
            <div>Devon Lane</div>
            <div>
              <MdExpandMore />
            </div>
          </div>
        </div>
        {/* END HEADER  */}

        {/* BODY */}
        <div>
          <div style={{ fontWeight: "bold", paddingTop: "20px" }}>Market</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20px",
            }}
          >
            {/* Bitcoin */}
            <div className="card1" style={{ display: "flex" }}>
              <div className="bitcoin">
                <div style={{ display: "flex" }}>
                  <text style={{ paddingLeft: "15px" }}>Bitcoin</text>
                  <div className="panah">
                    <FiArrowUpRight />
                  </div>
                </div>
                <div className="text-dolar">
                  <text>$1.453</text>
                </div>
              </div>
              <div>
                <Grafik />
              </div>
            </div>

            {/* Ethereum */}
            <div className="card1" style={{ display: "flex" }}>
              <div className="bitcoin">
                <div style={{ display: "flex" }}>
                  <text style={{ paddingLeft: "15px" }}>Ethereum</text>
                  <div className="panah-bawah">
                    <FiArrowDownRight />
                  </div>
                </div>
                <div className="text-dolar">
                  <text>$1.700</text>
                </div>
              </div>
              <div>
                <Grafik />
              </div>
            </div>

            {/* Ripple */}
            <div className="card1" style={{ display: "flex" }}>
              <div className="bitcoin">
                <div style={{ display: "flex" }}>
                  <text style={{ paddingLeft: "15px" }}>Ripple</text>
                  <div className="panah">
                    <FiArrowUpRight />
                  </div>
                </div>
                <div className="text-dolar">
                  <text>$0.586</text>
                </div>
              </div>
              <div>
                <Grafik />
              </div>
            </div>

            {/* Devcoin */}
            <div className="card1" style={{ display: "flex" }}>
              <div className="bitcoin">
                <div style={{ display: "flex" }}>
                  <text style={{ paddingLeft: "15px" }}>Devcoin</text>
                  <div className="panah-bawah">
                    <FiArrowDownRight />
                  </div>
                </div>
                <div className="text-dolar">
                  <text>$0.021</text>
                </div>
              </div>
              <div>
                <Grafik />
              </div>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              {/* sesi 1 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "750px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  fontWeight: "bold",
                }}
              >
                <div>Portofolio Stats</div>
                <div style={{ cursor: "pointer" }}>
                  <FiMoreHorizontal />
                </div>
              </div>

              <div
                style={{
                  fontWeight: "bold",
                  padding: "20px",
                  background: "#29263C",
                  width: "730px",
                  height: "56vh",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "200px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="card2">1W</div>
                    <div className="card2">1M</div>
                    <div className="card2">3M</div>
                    <div className="card2">6M</div>
                    <div className="card2">1Y</div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        border: "solid 1px",
                        borderColor: "white",
                        color: "white",
                        width: "50px",
                        height: "20px",
                        justifyContent: "space-between",
                        borderRadius: "5px",
                        alignItems: "center",
                        fontWeight: "lighter",
                        cursor: "pointer",
                      }}
                    >
                      <div>All</div>
                      <div>
                        <MdExpandMore />
                      </div>
                    </div>
                  </div>
                </div>
                <PortGraph/>
              </div>
            </div>
            {/* sesi2 */}
            <div style={{ width: "100%", padding: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>Exchange</div>
                <div style={{ cursor: "pointer" }}>
                  <FiMoreHorizontal />
                </div>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    background: "#29263C",
                    width: "100%",
                    height: "200px",
                    borderRadius: "20px",
                  }}
                >
                  <div style={{ paddingLeft: "15px" }}>
                    <div className="sell">
                      <text>Sell</text>
                    </div>
                    <div className="dolar-usd">
                      <text>47.660</text>
                      <text style={{ paddingLeft: "70px" }}>USD</text>
                    </div>

                    <div className="sell">Buy</div>
                    <div className="dolar-usd">
                      <text>1.0</text>
                      <text style={{ paddingLeft: "105px" }}>BTC</text>
                    </div>

                    <div style={{ paddingLeft: "13px", paddingTop: "18px" }}>
                      <button className="button-exchange">
                        <text className="text-exchange">Exchange</text>
                      </button>
                    </div>
                  </div>

                  <div style={{ paddingTop: "17px", paddingLeft: "10px" }}>
                    <div className="card-hijau">
                      <div className="bola">
                        <TbBallVolleyball color="white" />
                      </div>
                      <div className="text-balance">
                        <text>Balance</text>
                      </div>
                      <div className="exchange-dolar">
                        <text>$14.538,00</text>
                      </div>
                      <div className="text-bawah">
                        <text>12/24</text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "20px",
                }}
              >
                <div>Market Cap</div>
                <div style={{ cursor: "pointer" }}>
                  <FiMoreHorizontal />
                </div>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <div
                  style={{
                    background: "#29263C",
                    width: "100%",
                    height: "100px",
                    borderRadius: "20px",
                  }}
                >
                  <MarketCap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
