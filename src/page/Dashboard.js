import "../css/Dashboard.css";
import Body from "../component/Body";
import Sidebar from "../component/Sidebar";
function Dashboard() {
  return (
    <div style={{ padding: "10px", display: "flex", background:"#211e34", color:"white", }}>
      <div>
        <Sidebar />
      </div>
      <div style={{paddingLeft:"320px"}}>
        <Body />
      </div>
    </div>
  );
}

export default Dashboard;
