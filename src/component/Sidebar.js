import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoStatsChart, IoNewspaper } from "react-icons/io5";
import {VscThreeBars} from "react-icons/vsc";
import { BsGridFill } from "react-icons/bs";
import { AiFillPieChart, AiFillClockCircle, AiTwotoneSetting} from "react-icons/ai";
import { FaFolderMinus } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "react-pro-sidebar/dist/css/styles.css";
import "../css/Sidebar.css";


const Sidebar = () => {
      const [menuCollapse, setMenuCollapse] = useState(false)  
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader className="background py-2">
            <div className="logotext" onClick={menuIconClick}>
              {menuCollapse ? (
                <VscThreeBars />
              ) : (
                <div className="text">
                    <div className="icon-">
                      <IoStatsChart />
                    </div>&nbsp;&nbsp;
                    <div className="font-crypto">
                      Crypto.
                    </div>
                </div>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent className="background">
            <Menu iconShape="square">
              <MenuItem icon={<BsGridFill />}>Dashboard</MenuItem>
              <MenuItem icon={<AiFillPieChart />}>Market</MenuItem>
              <MenuItem icon={<FaFolderMinus />}>Portofolio</MenuItem>
              <MenuItem icon={<AiOutlineBarChart />}>Analytics</MenuItem>
              <MenuItem icon={<AiFillClockCircle />}>History</MenuItem>
              <MenuItem icon={<IoNewspaper />}>
              <div className="row">
                <div className="col-4">News</div>
                <div className="col-8 mar">Upadate!</div>
              </div>
              </MenuItem>
              <MenuItem icon={<AiTwotoneSetting />}>Settings</MenuItem>
            </Menu>
            <div className="py-1">
              <div>
                {menuCollapse ? (
                  <></>
                ) : (
                  <Card className='background'>
                    <div className="container-fluid">
                        <img
                        src="https://o.remove.bg/downloads/4ce5890a-7c30-4f68-8190-8429df2737c8/images-removebg-preview.png" />
                        <div className="text-center">
                                      <Card.Title className='font-card'>
                                        Newest Version are <br/> Available!!
                                      </Card.Title>
                                      <Card.Title className="font-dwn">
                                        More info Version 8.2
                                      </Card.Title>
                                      <Button clasName="btn">Update</Button>
                        </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;