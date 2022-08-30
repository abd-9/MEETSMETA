import React, { Component } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";

import CircleIcon from "@mui/icons-material/Circle";

import SearchInput from "./Shared/Input/Input";
import { Button, Grid } from "@mui/material";
import ButtonGradient from "./Shared/Buttons";

const Sidebar = ({ list }) => {
  const [open, setOpenSettingsList] = React.useState(false);
  const location = useLocation();
  const history = useHistory();
  const handleClick = () => {
    setOpenSettingsList(!open);
  };
  const handleChageTab = (value) => {
    history.push(value);
  };
  return (
    <React.Fragment>
      <section className="section " id="sidebar">
        <div className="px-3">
          <SearchInput />
        </div>
        <List sx={{ width: "100%" }} component="nav" className="mb-3">
          {list.map((l, index) => {
            if (l.route?.includes("setting")) {
              return (
                <div className="overflow-hidden" key={index}>
                  <ListItemButton
                    onClick={() => {
                      handleClick();
                      handleChageTab(l.route);
                    }}
                    selected={location.pathname.includes(l.route)}
                    className="sidebar-item"
                  >
                    <ListItemIcon>{<l.icon />}</ListItemIcon>

                    <ListItemText
                      className="mx-3 "
                      primary={<h5 className="mb-0">{l.label}</h5>}
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse
                    className="overflow-hidden"
                    in={open}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <SubItem
                        key="theme"
                        text="Theme"
                        selected={location.pathname.includes("theme")}
                        onClick={() => handleChageTab("/setting/theme")}
                      ></SubItem>
                      <SubItem
                        key="plan"
                        text="Plan"
                        selected={location.pathname.includes("plan")}
                        onClick={() => handleChageTab("/setting/plan")}
                      ></SubItem>
                      <SubItem
                        key="notifications"
                        selected={location.pathname.includes("notifications")}
                        text="Notifications"
                        onClick={() => handleChageTab("/setting/notifications")}
                      ></SubItem>
                    </List>
                  </Collapse>
                  <Divider className="line" />
                </div>
              );
            }
            return (
              <React.Fragment key={index}>
                <Item
                  key={l.id}
                  route={l.route}
                  selected={location.pathname.includes(l.pageName || l.route)}
                  onClick={() => {
                    handleChageTab(l.route);
                    setOpenSettingsList(false);
                  }}
                  Icon={l.icon}
                  text={l.label}
                ></Item>
              </React.Fragment>
            );
          })}
        </List>

        <Grid
          container
          className="mt-auto m-0 flex-column flexCenter text-center  "
        >
          <Grid item xs={12} className="flexCenter">
            <img src="/images/metamask.png" style={{ width: "30px" }}></img>{" "}
            <div className="h6 text-bold mb-0 mx-2">MetaMask wallet</div>
          </Grid>
          <Grid item xs={12}>
            <ButtonGradient
              // onClick={onSaveClick}
              color="secondary"
              className="my-5"
            >
              Logout
            </ButtonGradient>
          </Grid>
        </Grid>
      </section>
    </React.Fragment>
  );
};
export default Sidebar;

const Item = ({ Icon = DraftsIcon, text, selected, route, ...res }) => {
  return (
    <>
      <ListItemButton selected={selected} className="sidebar-item" {...res}>
        <ListItemIcon>
          <Icon width="20px" />
        </ListItemIcon>
        <ListItemText
          className="mx-3 "
          primary={<h5 className="mb-0 ">{text} </h5>}
        />
      </ListItemButton>
      <Divider className=" line" />
      {/* <div className={"line" + (selected ? " invisible " : "")}></div> */}
    </>
  );
};
const SubItem = ({
  Icon = DraftsIcon,
  text,
  selected,
  route,
  isLast,
  ...res
}) => {
  return (
    <>
      <ListItemButton
        className="sidebar-sub-item"
        selected={selected}
        sx={{ pl: 4 }}
        {...res}
      >
        <ListItemIcon className="relative">
          <div className="list-points-line"></div>
          <CircleIcon
            className="sub-list-icon"
            style={{
              widht: "15px",
              height: "15px",
            }}
          />
        </ListItemIcon>
        <ListItemText primary={<h6 className="mb-0">{text}</h6>} />
      </ListItemButton>
    </>
  );
};
