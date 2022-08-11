import React, { useState } from "react";
import { Navbar, Container, Collapse } from "reactstrap";
import { Link } from "react-router-dom";

// Import Logo

//import icon
import FeatherIcon from "feather-icons-react";

const NavbarPage = (props) => {
  const [state, setState] = useState({ isOpenMenu: false });

  return (
    <React.Fragment>
      <Navbar
        expand='md'
        // fixed={props.top === true ? "top" : ""}
        style={{ height: "5rem", backgroundColor: "red" }}
        className='  align-items-center w-100   '
        id='navbar'>
        <Container>
          <Collapse
            id='navbarCollapse'
            isOpen={true}
            className=' navbar-collapse'>
            <ul className='list-inline ml-auto menu-social-icon mb-0 py-2 py-lg-0'>
              <li className='list-inline-item ml-0'>
                <Link to='#' className='menu-social-link'>
                  <FeatherIcon icon='facebook' className='icon-xs sw_1-5' />
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='#' className='menu-social-link'>
                  <FeatherIcon icon='twitter' className='icon-xs sw_1-5' />
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='#' className='menu-social-link'>
                  <FeatherIcon icon='instagram' className='icon-xs sw_1-5' />
                </Link>
              </li>
              <li className='list-inline-item mr-0'>
                <Link to='#' className='menu-social-link '>
                  <FeatherIcon icon='linkedin' className='icon-xs sw_1-5' />
                </Link>
              </li>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
// }
export default NavbarPage;
