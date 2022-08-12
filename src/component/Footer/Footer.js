import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FooterLink from "../Footer/Footer_link";

// Footer Image

import logolight from "../../assets/images/logo-light.png";
// Import Logo

//import icon
import FeatherIcon from "feather-icons-react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: "Customer",
          child: [
            { title: "Works", link: "/" },
            { title: "Strategy", link: "/" },
            { title: "Releases", link: "/" },
            { title: "Press", link: "/" },
            { title: "Mission", link: "/" },
          ],
        },
        {
          id: 2,
          title: "Product",
          child: [
            { title: "Tranding", link: "/" },
            { title: "Popular", link: "/" },
            { title: "Customers", link: "/" },
            { title: "Features", link: "/" },
          ],
        },
        {
          id: 3,
          title: "Learn More",
          child: [
            { title: "Developers", link: "/" },
            { title: "Support", link: "/" },
            { title: "Customer Service", link: "/" },
            { title: "Get Started", link: "/" },
            { title: "Guide", link: "/" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Footer Start */}
        <footer
          className='footer'
          // style={{ backgroundImage: "url(" + footer_image + ")" }}
        >
          <Container>footer</Container>
        </footer>
        {/* Footer End */}
      </React.Fragment>
    );
  }
}

export default Footer;
