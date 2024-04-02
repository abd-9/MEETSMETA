import React, { Suspense, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from "../../store/actions";

import { Container, Grid } from "@mui/material";
import { ChagngeThemeVar } from "../../helper";
import { FadeInWhenVisible } from "../../component/Shared/Animation";
const Navbar = React.lazy(() =>
  import("../../component/LandingLayout/Navbar/index")
);
const FirstSection = React.lazy(() =>
  import("../../component/LandingLayout/FirstSection")
);

const Sidebar = React.lazy(() => import("../../component/Sidebar"));
const MainSection = React.lazy(() =>
  import("../../component/MainSectionRouter")
);
// const Feature = React.lazy(() => import("../../component/Feature"));

const LandingLayout = ({ Settings }) => {
  const [state, setState] = useState({
    navItems: [
      {
        id: 1,
        route: "/wallet",
        label: "Wallet",
        pageName: "wallet",
      },
    ],
  });

  useEffect(() => {
    // --main-bg-color
    ChagngeThemeVar("--main-bg-color", "#fffff");
    return () => {
      ChagngeThemeVar("--main-bg-color", "#f4f4f4");
    };
  }, []);
  const PreLoader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Suspense fallback={<PreLoader />}>
        <Navbar className=" px-16" />
        <Grid
          container
          className="mt-10 px-20 "
          rowGap={10}
          id="landing-layout"
        >
          <FirstSection key={"2232"} />

          <FirstSection key={"2s"} />

          <FirstSection key={"22sw32"} />

          <FirstSection key={"2sw"} />

          <FirstSection key={"22swsa32"} />

          <FirstSection key={"2as"} />

          {/* <Footer /> */}
        </Grid>
      </Suspense>
    </React.Fragment>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(LandingLayout);
