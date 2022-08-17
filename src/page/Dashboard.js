import "../css/Dashboard.css";
import Body from "../component/Body";
import Sidebar from "../component/Sidebar";
function Dashboard() {
  return (
    <div style={{ padding: "10px", display: "flex" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{paddingLeft:"20px"}}>
        <Body />
      </div>
    </div>
  );
}

export default Dashboard;
