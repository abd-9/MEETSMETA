import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../../store/actions";
import MainSectionFooter from "../MainSection/SettingsFooter";
import SidebarHeader from "../MainSection/Header";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { InputOutlined } from "../Shared/Input/Input";
import SettingsContainer from "../MainSection/SettingsMainContainer";
import { useFormik } from "formik";
import { Label } from "../Shared/Lable";
import { useHistory } from "react-router-dom";
import { SectionAnimation } from "../Shared/Animation";
import PaymentCard from "../Shared/Card/PaymentCard";
import { Button } from "../Shared/Buttons";

// Import client   Image

const Payment = ({ Settings, UpdateUserThemeSettings }) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fromApi = useFormik({
    onSubmit: handleSubmit,
    initialValues: { name: "", country: "", address: "" },
  });
  const { values } = fromApi;

  return (
    <>
      <SettingsContainer>
        <SidebarHeader title="Settings - Payment"></SidebarHeader>
        <SectionAnimation className="grow">
          <Container className="flex flex-col  grow h-full">
            <Grid
              container
              rowGap={3}
              justifyContent={"center"}
              justifyItems="center"
              className="my-3"
              // alignItems={"flex-start"}
            >
              <PaymentCard
                title="White Sands Parcel Pass"
                desc="White Sands is your home in an open and evolving metaverse proudly built on NFT Worlds."
                imageUrl={"/images/test/pro1.png"}
              />
              <Grid item md={10} sm={12}>
                <Button
                  className={"w-full "}
                  onClick={() => {}}
                  roundedClass=" rounded-full"
                  customPadding={"py-2"}
                  readOnly
                  color="info"
                >
                  <span className="text-base">Account</span>
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              // direction="column"
              justifyItems="center"
              className="grow"
              // alignItems={"flex-start"}
            ></Grid>
          </Container>
        </SectionAnimation>
      </SettingsContainer>
      <MainSectionFooter
        onEditClick={() => {
          history.goBack();
        }}
        editLable="Back"
        onSaveClick={() => {
          document.getElementById("themeForm").click();
        }}
      ></MainSectionFooter>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
