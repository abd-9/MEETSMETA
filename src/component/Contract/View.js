import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../../store/actions";
import MainSectionFooter from "../MainSection/Footer";
import SidebarHeader from "../MainSection/Header";
import { toast } from "react-toastify";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { InputOutlined } from "../Shared/Input/Input";
import ButtonGradient from "../Shared/Buttons";
import SettingsContainer from "../MainSection/SettingsMainContainer";
import { useHistory } from "react-router-dom";

const ViewProfile = ({ Settings, UpdateUserThemeSettings }) => {
  const [data, _setData] = useState(Settings.theme || {});

  const history = useHistory();

  const handelSubmit = (e) => {
    e.preventDefault();

    UpdateUserThemeSettings(
      data,
      () => {
        toast.info("Saved Successfully ");
      },
      () => {
        toast.error("Failed to save");
      }
    );
  };
  const [tempColor, setTempColor] = useState({ name: "", value: "" });

  const setData = (newData) => {
    _setData((old) => ({ ...old, ...newData }));
  };

  return (
    <>
      <SettingsContainer>
        <SidebarHeader title="Profile"></SidebarHeader>

        <form className="w-full h-100 my-5" onSubmit={handelSubmit}>
          <Container>
            <Grid container className=" px-2 ">
              <Grid
                container
                justifyContent={"center"}
                justifyItems="center"
                alignItems={"flex-end"}
              >
                <Grid item xs={4} className=" ">
                  <img
                    src="/images/empty-company-logo.png"
                    width={"200px"}
                    height="auto"
                  />
                </Grid>
                <Grid item xs={7} style={{}}>
                  <div className=" text-grayLight fw-500 mb-10 text-3xl">
                    Company name
                  </div>
                  <div className="flexCenter ">
                    <InputOutlined
                      onChange={(e) => {
                        setData({ companyName: e.target.value });
                      }}
                      value={data.companyName}
                      label={null}
                      placeholder="Company Name LLC"
                      endButton={
                        <ButtonGradient
                          customPadding="px-3"
                          className={"text-black  "}
                          color="secondary"
                        >
                          Choose file{" "}
                        </ButtonGradient>
                      }
                    ></InputOutlined>

                    <ButtonGradient className={"mx-5"} color="primary">
                      Upload
                    </ButtonGradient>
                  </div>
                </Grid>
              </Grid>
              <Grid container direction={"column"} className="mx-2 my-8">
                <div className="text-base fw-500 mb-5">Address</div>

                <div className="text-sm  mx-8">
                  <div className="my-5">United Arab Emirates</div>
                  <div className="my-5 text-gray-400 ">
                    308, Capital Golden Tower, 125 street, Business Bay, Dubai.
                  </div>
                </div>
              </Grid>
              <Grid container direction={"column"} className="mx-2 ">
                <div className="text-base fw-500 mb-5">Primary contact</div>

                <div className="text-sm  mx-8">
                  <div className="my-2 text-gray-400 ">Haligul Jaman</div>
                  <div className="my-2 text-gray-400 ">+971 52939393</div>
                  <div className="my-2 text-gray-400 ">
                    companyemail@address.com
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
          <button type="submit" className="d-none" id="themeForm"></button>
        </form>
      </SettingsContainer>
      <MainSectionFooter
        onSaveClick={() => {
          document.getElementById("themeForm").click();
        }}
        onEditClick={() => {
          history.push("/profile/edit");
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
