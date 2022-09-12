import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { useFormik } from "formik";

import { toast } from "react-toastify";
import xHistory from "../../utilities/history";
import { SECTIONS_ROUTE } from "../../routes";
import { Actions } from "../../store/actions";

import { SectionAnimation } from "../Shared/Animation";
import SidebarHeader from "../MainSection/Header";
import { Label } from "../Shared/Lable";
import ContractMainContainer from "../MainSection/ContractMainContainer";
import ButtonGradient from "../Shared/Buttons";
import Checkbox from "../Shared/Checkbox/index.js";
import { StatusFilters } from "./Filters";
import StatusMainContainer from "../MainSection/StatusMainContainer";
import PlayersList from "./PlayersList";

// Import client   Image

const Status = ({ Settings, UpdateUserThemeSettings }) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formApi = useFormik({
    onSubmit: handleSubmit,
    initialValues: { name: "", country: "", address: "" },
  });
  const { values } = formApi;
  const [networksList, setNetworksList] = useState([
    { id: "1122", name: "Polygon Network" },
  ]);
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleDeploy = () => {
    toast.success("Deployed Successfully ");
    xHistory.push(SECTIONS_ROUTE.contract.list);
  };

  return (
    <StatusMainContainer>
      <SidebarHeader title="Status"></SidebarHeader>
      <form onSubmit={formApi.handleSubmit} className="w-full grow my-5">
        <Container className="h-full flex  flex-col px-0">
          <Grid style={{ height: "3rem" }} className="px-5" container>
            <StatusFilters />
          </Grid>
          <Grid
            className="grow relative"
            style={{ overflowY: "overlay" }}
            container
          >
            <PlayersList />
          </Grid>
        </Container>
      </form>
    </StatusMainContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Status);
