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
import { ChagngeThemeVar, GetTheme, SetThemeColors } from "../../helper";
import { Container, Grid } from "@mui/material";
import WalletStatusCard from "../../component/Shared/Card/WalletStatusCard";
import { SectionAnimation } from "../../component/Shared/Animation";
// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Sidebar = React.lazy(() => import("../../component/Sidebar"));
const MainSection = React.lazy(() =>
  import("../../component/MainSectionRouter")
);
// const Feature = React.lazy(() => import("../../component/Feature"));

const WalletLayout = ({ Settings }) => {
  const [state, setState] = useState({
    navItems: [
      {
        id: 1,
        route: "/wallet",
        label: "Wallet",
        pageName: "wallet",
        // icon: CollectionIcon,
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
      <Suspense fallback={PreLoader}>
        <Container id="wallet-layout">
          <Grid container>
            <Navbar onlyLogo />
          </Grid>
          <Grid container className="grow" id="">
            <Grid xs item className="p-0  flexCenter overflow-hidden">
              <WalletStatusCard></WalletStatusCard>
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

export default connect(mapStateToProps, mapDispatchToProps)(WalletLayout);
