import "../css/Body.css";
import { RiMessengerLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdExpandMore } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
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
            <div className="card1"></div>
            <div className="card1"></div>
            <div className="card1"></div>
            <div className="card1"></div>
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
                  height: "50vh",
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
                    background: "#29263C",
                    width: "100%",
                    height: "200px",
                    borderRadius: "20px",
                  }}
                ></div>
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
                    height: "140px",
                    borderRadius: "20px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
