import React, { Suspense, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { Actions } from "../../store/actions";

// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Sidebar = React.lazy(() => import("../../component/Sidebar"));
const MainSection = React.lazy(() => import("../../component/MainSection"));
const Feature = React.lazy(() => import("../../component/Feature"));
const Clients = React.lazy(() => import("../../component/Clients"));
const Contact = React.lazy(() => import("../../component/Contact"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));

const Layout1 = (props) => {
  const [state, setState] = useState({
    navItems: [
      { id: 1, idnm: "home", navheading: "Home" },
      { id: 2, idnm: "about", navheading: "About Us" },
      { id: 3, idnm: "services", navheading: "Services" },
      { id: 4, idnm: "features", navheading: "Features" },
      { id: 5, idnm: "project", navheading: "Project" },
      { id: 6, idnm: "clients", navheading: "Clients" },
      { id: 7, idnm: "contact", navheading: "Contact Us" },
    ],
    pos: document.documentElement.scrollTop,
    imglight: false,
    navClass: "",
  });

  const PreLoader = () => {
    return (
      <div id='preloader'>
        <div id='status'>
          <div className='spinner'>
            <div className='bounce1'></div>
            <div className='bounce2'></div>
            <div className='bounce3'></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Suspense fallback={PreLoader}>
        <Container>
          <Row>
            <Navbar />
          </Row>
          <Row>
            <Col xs={4}>
              <Sidebar />
            </Col>
            <Col xs>
              <MainSection />
            </Col>
          </Row>

          <Footer />
        </Container>
      </Suspense>
    </React.Fragment>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...Actions,
    },
    dispatch,
  );
}
function mapStateToProps({ Settings }) {
  return { Settings };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout1);
