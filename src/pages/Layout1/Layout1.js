import React, { Suspense, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from "../../store/actions";
import {
  CollectionIcon,
  ContractIcon,
  OverviewIcon,
  ProfileIcon,
  SettingIcon,
  StatusIcon,
} from "../../component/Shared/icons";
import { GetTheme, SetThemeColors } from "../../helper";
import { Container, Grid } from "@mui/material";
import { SECTIONS_ROUTE } from "../../routes";
// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Sidebar = React.lazy(() => import("../../component/Sidebar"));
const MainSection = React.lazy(() =>
  import("../../component/MainSectionRouter")
);
// const Feature = React.lazy(() => import("../../component/Feature"));

const Layout1 = ({ Settings, FetchUserThemeSettings }) => {
  useEffect(() => {
    SetThemeColors(Settings.theme);
    return () => {};
  }, [Settings.theme]);

  useEffect(() => {
    // if (GetTheme()) FetchUserThemeSettings();
    return () => {};
  }, []);

  const [state, setState] = useState({
    navItems: [
      {
        id: 1,
        route: SECTIONS_ROUTE.collection.list,
        label: "Collection",
        pageName: "collection",
        // component: Feature,
        icon: CollectionIcon,
      },
      {
        id: 2,
        route: SECTIONS_ROUTE.overview,
        // route: "overview",
        label: "Overview",
        // component: Feature,
        icon: OverviewIcon,
      },
      {
        id: 4,

        route: SECTIONS_ROUTE.status,
        label: "Status",
        // component: Feature,
        icon: StatusIcon,
      },
      {
        id: 5,
        route: SECTIONS_ROUTE.settings.main,

        label: "Setting",
        // component: Feature,
        icon: SettingIcon,
      },
      {
        id: 7,
        route: SECTIONS_ROUTE.profile.view,
        label: "Profile",
        pageName: "profile",
        // component: Feature,
        icon: ProfileIcon,
      },
      {
        id: 8,
        route: SECTIONS_ROUTE.contract.add,
        label: "Contract",

        // component: Feature,
        icon: ContractIcon,
      },
    ],
    pos: document.documentElement.scrollTop,
    imglight: false,
    navClass: "",
  });

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
      <Suspense fallback={PreLoader}>
        <Container id="layout1">
          <Grid container>
            <Navbar />
          </Grid>
          <Grid container id="main-container">
            <Grid item xs={3} className="pr-0 ">
              <Sidebar list={state.navItems} />
            </Grid>
            <Grid
              xs
              item
              className="p-0 main-section-container relative overflow-hidden"
            >
              <MainSection />
            </Grid>
          </Grid>

          {/* <Footer /> */}
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
    dispatch
  );
}
function mapStateToProps({ Settings }) {
  return { Settings };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout1);
