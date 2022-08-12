import React from "react";
import { Container, Row } from "reactstrap";
import Divider from "@mui/material/Divider";
import { HomeIcon, NotificationIcon } from "../Shared/icons";

const SidebarHeader = ({ title }) => {
  return (
    <>
      <Container className='p-2 px-3'>
        <Row className='flexEnd'>
          <span className='svg-icon'>
            <NotificationIcon width='23px' className='mx-2 svg-icon' />
          </span>{" "}
          <span className='svg-icon'>
            <HomeIcon width='30px' />
          </span>
        </Row>
        <Row className='flexStart'>
          <h6 className='mb-0 titles-color font-weight-bold mx-5'>{title}</h6>
        </Row>
      </Container>
      <Divider
        style={{
          left: "-40px",
          width: "110%",
          position: "absolute",
        }}
        className='position-absolute my-1  '
      />
    </>
  );
};

export default SidebarHeader;
