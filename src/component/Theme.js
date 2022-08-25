import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../store/actions";
import MainSectionFooter from "./MainSection/Footer";
import SidebarHeader from "./MainSection/Header";
import { ColorPicker, ColorPickerButton } from "./Shared/ColorPicker";
import { toast } from "react-toastify";
import { Container, Grid, TextField } from "@mui/material";

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
      <div
        className="d-flex flex-column position-relative z-3 w-100 "
        style={{
          backgroundColor: "white",
          height: "90%",
          borderRadius: "30px",
          borderBottomLeftRadius: "0px",
        }}
      >
        <SidebarHeader title="Setting - Theme"></SidebarHeader>

        <Grid
          container
          className="mx-0 my-3 flex-grow-1 general-theme-section   flexCenter  "
        >
          <div id="tab-container" className="">
            <form className="w-100" onSubmit={handelSubmit}>
              <Container className="px-0 mx-0">
                <Grid container className="align-items-center ">
                  <Grid xs={3}>
                    <div className="fw-500">Title</div>{" "}
                  </Grid>
                  <Grid xs={6}>
                    <TextField
                      onChange={(e) => {
                        setData({ companyName: e.target.value });
                      }}
                      value={data.companyName}
                      bsSize="small"
                      className="custom-input"
                      placeholder="Company Name LLC"
                    ></TextField>
                  </Grid>
                  <Grid></Grid>
                  <Grid xs={3}></Grid>
                  <Grid xs={6}>
                    <p className="px-2 font-italic">This is a text input.</p>{" "}
                  </Grid>
                </Grid>
                <Grid container className="my-3 align-items-center">
                  <Grid xs={3}>
                    <div className="fw-500">Title Color</div>
                  </Grid>
                  <Grid xs={3}>
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
                  <Grid xs={3}>
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
                <Grid container className="my-3 align-items-center">
                  <Grid xs={3}>
                    <div className="fw-500">Menu Light Color</div>
                  </Grid>
                  <Grid xs={3}>
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
                  <Grid xs={3}></Grid>
                </Grid>
                <Grid container className="my-3 align-items-center">
                  <Grid xs={3}>
                    <div className="fw-500">Menu Dark Color</div>
                  </Grid>
                  <Grid xs={3}>
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

                <Grid container className="my-3 align-items-center">
                  <Grid xs={3}>
                    <div className="fw-500">Menu Text Color</div>
                  </Grid>
                  <Grid xs={3}>
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
                  <Grid xs={3}></Grid>
                </Grid>
              </Container>

              <button type="submit" className="d-none" id="themeForm"></button>
            </form>

            <div id="tab" className="fz-sm fw-bold">
              General
            </div>
          </div>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
