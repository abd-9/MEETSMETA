import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Import Logo

//import icon

import logo from "../Shared/icons/logo.png";
import userimage from "../Shared/icons/user.png";
import { Actions } from "../../store/actions";
import { Container, Grid } from "@mui/material";

const NavbarPage = ({ Settings }) => {
  const [state, setState] = useState({ isOpenMenu: false });

  return (
    <React.Fragment>
      <Grid
        container
        style={{}}
        className="  align-items-center mb-2 w-full "
        id="navbar"
      >
        <Container className="  ">
          <Grid container className="flexBetween w-full">
            <Grid item xs>
              <img style={{ width: "270px" }} src={logo}></img>
            </Grid>
            <Grid item xs={6} className="flexEnd">
              <div className="h6 fw-500 mx-3 mb-0 font-weight-bold">
                {Settings?.theme?.companyName || "Company name L.L.C"}
              </div>
              <div>
                <img
                  alt="Logo"
                  style={{ height: "39px" }}
                  src={userimage}
                ></img>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};
// }
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...Actions,
    },
    dispatch
  );
}
function mapStateToProps({ Settings }) {
  return { Settings };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarPage);
