import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Button, Col, Container, FormText, Input, Row } from "reactstrap";
import { Actions } from "../store/actions";
import MainSectionFooter from "./MainSection/Footer";
import SidebarHeader from "./MainSection/Header";
import { ColorPicker, ColorPickerButton } from "./Shared/ColorPicker";
import { toast } from "react-toastify";

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
      },
    );
  };
  const [tempColor, setTempColor] = useState({ name: "", value: "" });

  const setData = (newData) => {
    _setData((old) => ({ ...old, ...newData }));
  };

  return (
    <>
      <div
        className='d-flex flex-column position-relative z-3 w-100 '
        style={{
          backgroundColor: "white",
          height: "90%",
          borderRadius: "30px",
          borderBottomLeftRadius: "0px",
        }}>
        <SidebarHeader title='Setting - Theme'></SidebarHeader>

        <Row className='mx-0 my-3 flex-grow-1 general-theme-section   flexCenter  '>
          <div id='tab-container' className=''>
            <form className='w-100' onSubmit={handelSubmit}>
              <Container className='px-0 mx-0'>
                <Row className='align-items-center '>
                  <Col xs={3}>
                    <div className='fw-500'>Title</div>{" "}
                  </Col>
                  <Col xs={6}>
                    <Input
                      onChange={(e) => {
                        setData({ companyName: e.target.value });
                      }}
                      size='small'
                      className='custom-input'
                      placeholder='Company Name LLC'></Input>
                  </Col>
                  <Col></Col>
                  <Col xs={3}></Col>
                  <Col xs={6}>
                    <FormText className='px-2 font-italic'>
                      This is a text input.
                    </FormText>{" "}
                  </Col>
                </Row>
                <Row className='my-3 align-items-center'>
                  <Col xs={3}>
                    <div className='fw-500'>Title Color</div>
                  </Col>
                  <Col xs={3}>
                    <ColorPickerButton
                      hex={data.titleColor}
                      onClick={() =>
                        setTempColor({
                          value: data.titleColor,
                          name: "titleColor",
                        })
                      }
                    />
                  </Col>
                  <Col xs={3}>
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
                      }></ColorPicker>
                  </Col>
                </Row>
                <Row className='my-3 align-items-center'>
                  <Col xs={3}>
                    <div className='fw-500'>Menu Light Color</div>
                  </Col>
                  <Col xs={3}>
                    <ColorPickerButton
                      hex={data.menuColor}
                      onClick={() =>
                        setTempColor({
                          value: data.menuColor,
                          name: "menuColor",
                        })
                      }
                    />
                  </Col>
                  <Col xs={3}></Col>
                </Row>
                <Row className='my-3 align-items-center'>
                  <Col xs={3}>
                    <div className='fw-500'>Menu Dark Color</div>
                  </Col>
                  <Col xs={3}>
                    <ColorPickerButton
                      hex={data.menuSecondColor}
                      onClick={() =>
                        setTempColor({
                          value: data.menuSecondColor,
                          name: "menuSecondColor",
                        })
                      }
                    />
                  </Col>
                  <Col xs={3}></Col>
                </Row>

                <Row className='my-3 align-items-center'>
                  <Col xs={3}>
                    <div className='fw-500'>Menu Text Color</div>
                  </Col>
                  <Col xs={3}>
                    <ColorPickerButton
                      hex={data.menuTextColor}
                      onClick={() =>
                        setTempColor({
                          value: data.menuTextColor,
                          name: "menuTextColor",
                        })
                      }
                    />
                  </Col>
                  <Col xs={3}></Col>
                </Row>
              </Container>

              <button type='submit' className='d-none' id='themeForm'></button>
            </form>

            <div id='tab' className='fz-sm fw-bold'>
              General
            </div>
          </div>
        </Row>
      </div>
      <MainSectionFooter
        onSaveClick={() => {
          document.getElementById("themeForm").click();
        }}></MainSectionFooter>
    </>
  );
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...Actions,
    },
    dispatch,
  );
}
function mapStateToProps({ Settings }) {
  return { Settings };
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
