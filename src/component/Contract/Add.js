import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../../store/actions";
import MainSectionFooter from "../MainSection/SettingsFooter";
import SidebarHeader from "../MainSection/Header";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import SettingsContainer from "../MainSection/SettingsMainContainer";
import { Form, useFormik } from "formik";
import { Label } from "../Shared/Lable";
import { validHex } from "@uiw/react-color";
import { useHistory } from "react-router-dom";
import AddContractStepper from "./Stepper";
import { XAutoComplate } from "../Shared/XAutoComplate";
import ContractMainContainer from "../MainSection/ContractMainContainer";
import ButtonGradient from "../Shared/Buttons";
import Checkbox from "../Shared/Checkbox/index.js";
import { toast } from "react-toastify";
import { SectionAnimation } from "../Shared/Animation";

// Import client   Image

const AddContract = ({ Settings, UpdateUserThemeSettings }) => {
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
  };

  const renderButotn = () => {
    if (activeStep === 0) {
      return (
        <ButtonGradient onClick={handleNext} color="primary">
          Next
        </ButtonGradient>
      );
    }
    if (activeStep === 1)
      return (
        <ButtonGradient onClick={handleDeploy} color="primary">
          Deploy
        </ButtonGradient>
      );
  };
  const renderCurrentStep = () => {
    if (activeStep == 0) {
      return (
        <div>
          <Label className="mb-5 font-semibold">Chose Network</Label>
          <XAutoComplate
            options={networksList || []}
            lableKey="name"
            valueKey="value"
            // onInputChange={(value) => loadOptions(value)}
            onChange={(e, value) => formApi.setFieldValue("network", value)}
            value={values.network || null}
            // loading={fetchingUsers}
            name="network"
          />
        </div>
      );
    }
    if (activeStep === 1) {
      return (
        <div>
          <Label className="mb-5 font-semibold  "> Terms & Conditions</Label>
          <Label
            fontColor="text-label-d2"
            fontClassName="text-sm  fw-500"
            className="mb-5 mx-2 "
          >
            Generate a Terms & Conditions agreement for your business with the
            Terms & Conditions Generator from TermsFeed.
            <br />
            <br />
            Create a custom Terms & Conditions agreement to comply with the law
            and the requirements of third-parties. Use the Terms & Conditions
            agreement for: Websites, Apps (iOS, Android), E-commerce, SaaS,
            Facebook and many more.
            <br />
            <br />
            Free hosting page. Download the Terms and Conditions as HTML, DOCX,
            Plain Text, Markdown. Edit as you wish. Update anytime.
          </Label>

          <Checkbox
            labelClassName={"text-sm fw-500 "}
            className="mx-1 "
            label="Generate a Terms & Conditions agreement for your business with the Terms & Conditions Generator from TermsFeed."
          ></Checkbox>
        </div>
      );
    }
  };
  return (
    <ContractMainContainer>
      <SidebarHeader title="Add contract"></SidebarHeader>
      <form onSubmit={formApi.handleSubmit} className="w-full grow my-5">
        <Container className="h-full flex justify-between flex-col flex-b">
          <Grid
            container
            rowSpacing={4}
            justifyContent={"flex-start"}
            justifyItems="flex-start"
            className=" px-2 "
          >
            <Grid item xs={12}>
              <SectionAnimation>
                <AddContractStepper
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                ></AddContractStepper>
              </SectionAnimation>
            </Grid>
            <Grid item xs={12} className="stepper-container">
              <SectionAnimation key={activeStep}>
                {renderCurrentStep()}
              </SectionAnimation>
            </Grid>
          </Grid>
          <div className="self-end mx-1 mb-2">{renderButotn()}</div>
        </Container>
        <button type="submit" className="d-none" id="themeForm"></button>
      </form>
    </ContractMainContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddContract);
