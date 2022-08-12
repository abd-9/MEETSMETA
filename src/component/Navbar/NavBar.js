import React, { useState } from "react";
import { Navbar, Container, Collapse, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Import Logo

//import icon
import FeatherIcon from "feather-icons-react";
import { OverviewIcon } from "../Shared/icons";
import logo from "../Shared/icons/logo.png";
import userimage from "../Shared/icons/user.png";

const NavbarPage = (props) => {
  const [state, setState] = useState({ isOpenMenu: false });

  return (
    <React.Fragment>
      <Navbar
        expand='md'
        // fixed={props.top === true ? "top" : ""}
        style={{}}
        className='  align-items-center mb-2 w-100   '
        id='navbar'>
        <Container className='  '>
          <Row className='flexBetween w-100'>
            <Col xs>
              <img style={{ width: "320px" }} src={logo}></img>
            </Col>
            <Col xs={6} className='flexEnd'>
              <div className='h6 fw-500 mx-3 mb-0 font-weight-bold'>
                Company name L.L.C
              </div>
              <div>
                <img style={{ height: "39px" }} src={userimage}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
// }
export default NavbarPage;
