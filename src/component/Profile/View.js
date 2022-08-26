import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../../store/actions";
import MainSectionFooter from "../MainSection/Footer";
import SidebarHeader from "../MainSection/Header";
import { ColorPicker, ColorPickerButton } from "../Shared/ColorPicker";
import { toast } from "react-toastify";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { InputOutlined } from "../Shared/Input/Input";

// Import client   Image

const ViewProfile = ({ Settings, UpdateUserThemeSettings }) => {
  const [data, _setData] = useState(Settings.theme || {});
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
      <div
        className="d-flex flex-column relative z-3 w-full "
        style={{
          backgroundColor: "white",
          height: "90%",
          borderRadius: "30px",
          borderBottomLeftRadius: "0px",
        }}
      >
        <SidebarHeader title="Profile"></SidebarHeader>

        <form className="w-full h-100" onSubmit={handelSubmit}>
          <Container>
            <Grid container className="px-2 ">
              <Grid
                container
                justifyContent={"center"}
                justifyItems="center"
                alignItems={"flex-end"}
              >
                <Grid item xs={4} className=" ">
                  <img
                    src="/images/empty-image.png"
                    width={"200px"}
                    height="auto"
                  />
                </Grid>
                <Grid item xs={8} style={{}}>
                  <h3 className="mb-4">Company name </h3>

                  <InputOutlined
                    onChange={(e) => {
                      setData({ companyName: e.target.value });
                    }}
                    value={data.companyName}
                    label={null}
                    placeholder="Company Name LLC"
                  ></InputOutlined>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <button type="submit" className="d-none" id="themeForm"></button>
        </form>
      </div>
      <MainSectionFooter
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
