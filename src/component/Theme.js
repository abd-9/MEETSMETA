import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../store/actions";
import MainSectionFooter from "./MainSection/Footer";
import SidebarHeader from "./MainSection/Header";
import { ColorPicker, ColorPickerButton } from "./Shared/ColorPicker";
import { toast } from "react-toastify";
import { Container, Grid, TextField } from "@mui/material";
import { InputOutlined } from "./Shared/Input/Input";
import SettingsContainer from "./MainSection/SettingsMainContainer";

// Import client   Image

const Theme = ({ Settings, UpdateUserThemeSettings }) => {
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
      <SettingsContainer>
        <SidebarHeader
          className={"mb-10"}
          title="Setting - Theme"
        ></SidebarHeader>
        <Grid
          container
          className="mx-0 grow-1  general-theme-section   flexCenter  "
        >
          <div id="tab-container" className="">
            <form className="w-full" onSubmit={handelSubmit}>
              <Container className="px-0 mx-0">
                <Grid
                  container
                  alignItems={"center"}
                  className=" content-center "
                >
                  <Grid item xs={3}>
                    <div className="fw-500 text-base">Title</div>{" "}
                  </Grid>
                  <Grid item xs={6}>
                    <InputOutlined
                      margin="none"
                      onChange={(e) => {
                        setData({ companyName: e.target.value });
                      }}
                      value={data.companyName}
                      className="custom-input"
                      placeholder="Company Name LLC"
                    ></InputOutlined>
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                    <p className="px-2 pt-1 text-sm italic">
                      This is a text input.
                    </p>{" "}
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems={"center"}
                  className="my-10 align-items-center"
                >
                  <Grid item xs={3}>
                    <span className="fw-500 text-base">Title Color</span>
                  </Grid>
                  <Grid item xs={3}>
                    <ColorPickerButton
                      hex={data.titleColor}
                      onClick={() =>
                        setTempColor({
                          value: data.titleColor,
                          name: "titleColor",
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <ColorPicker
                      onMouseUp={() => {
                        setData({ [tempColor.name]: tempColor.value });
                        setTempColor({ name: "", value: tempColor.value });
                      }}
                      hex={tempColor.value}
                      setHex={(v) =>
                        setTempColor({ name: tempColor.name, value: v })
                      }
                      className={
                        tempColor.name
                          ? " color-picker op-1 "
                          : " color-picker op-0 "
                      }
                    ></ColorPicker>
                  </Grid>
                </Grid>
                <Grid
                  alignItems={"center"}
                  container
                  className="my-10 align-items-center"
                >
                  <Grid item xs={3}>
                    <div className="fw-500 text-base">Menu Light Color</div>
                  </Grid>
                  <Grid item xs={3}>
                    <ColorPickerButton
                      hex={data.menuColor}
                      onClick={() =>
                        setTempColor({
                          value: data.menuColor,
                          name: "menuColor",
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={3}></Grid>
                </Grid>
                <Grid
                  alignItems={"center"}
                  container
                  className="my-10  align-items-center"
                >
                  <Grid item xs={3}>
                    <div className="fw-500 text-base">Menu Dark Color</div>
                  </Grid>
                  <Grid item xs={3}>
                    <ColorPickerButton
                      hex={data.menuSecondColor}
                      onClick={() =>
                        setTempColor({
                          value: data.menuSecondColor,
                          name: "menuSecondColor",
                        })
                      }
                    />
                  </Grid>
                  <Grid xs={3}></Grid>
                </Grid>

                <Grid
                  container
                  alignItems={"center"}
                  className="my-10 align-items-center"
                >
                  <Grid item xs={3}>
                    <div className="fw-500 text-base">Menu Text Color</div>
                  </Grid>
                  <Grid item xs={3}>
                    <ColorPickerButton
                      hex={data.menuTextColor}
                      onClick={() =>
                        setTempColor({
                          value: data.menuTextColor,
                          name: "menuTextColor",
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={3}></Grid>
                </Grid>
              </Container>

              <button type="submit" className="d-none" id="themeForm"></button>
            </form>

            <div id="tab" className="fz-sm fw-bold">
              General
            </div>
          </div>
        </Grid>
      </SettingsContainer>

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

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
