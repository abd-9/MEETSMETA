import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Divider from "@mui/material/Divider";
import { HomeIcon, NotificationIcon } from "../Shared/icons";

const MainSectionFooter = ({ title, onSaveClick }) => {
  return (
    <Container className='p-2 px-3 main-section-footer z-1'>
      <Row className='flexEnd'>
        <Col xs='auto' className='mr-4'>
          <Button
            onClick={onSaveClick}
            className='logout-button my-2  p '
            size='sm'>
            Save changes
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSectionFooter;
