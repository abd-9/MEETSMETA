import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../../store/actions";
import MainSectionFooter from "../MainSection/SettingsFooter";
import SidebarHeader from "../MainSection/Header";
import { toast } from "react-toastify";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { InputOutlined } from "../Shared/Input/Input";
import ButtonGradient from "../Shared/Buttons";

import { useHistory } from "react-router-dom";
import ContractMainContainer from "../MainSection/ContractMainContainer";
import CollactionFooter from "../MainSection/CollactionFooter";
import CollectionMainContainer from "../MainSection/CollectionMainContainer";
import xHistory from "../../utilities/history";
import CollectionCard, {
  EmptyCollectionCard,
} from "../Shared/Card/CollectionCard";
import { AP, ListAnimation } from "../Shared/Animation";
import { SECTIONS_ROUTE } from "../../routes";

const CollectionsList = ({ Settings }) => {
  const history = useHistory();

  return (
    <>
      <CollectionMainContainer>
        <SidebarHeader title="Collection"></SidebarHeader>

        <Grid container spacing={4} className="px-6 py-4">
          <AP exitBeforeEnter>
            {[1, 2, 3, 4, 5, 6, 7].map((index) => {
              return (
                <Grid item xs={4} key={index}>
                  <ListAnimation delay={`${0.2 * (index / 10)}`} key={index}>
                    <CollectionCard
                      title="White Sands Parcel Pass"
                      desc="White Sands is your home in an open and evolving metaverse proudly built on NFT Worlds."
                      coverUrl={"/images/test/bg1.png"}
                      imageUrl={"/images/test/pro1.png"}
                    />
                  </ListAnimation>
                </Grid>
              );
            })}

            <Grid item xs={4}>
              <ListAnimation delay={0.2 * ([1, 2, 3, 4, 5, 6, 7].length / 10)}>
                <EmptyCollectionCard />
              </ListAnimation>
            </Grid>
          </AP>
        </Grid>
      </CollectionMainContainer>
      <CollactionFooter
        onSaveClick={() => {
          // document.getElementById("themeForm").click();
          // xHistory.push(SECTIONS_ROUTE.profile.edit);
        }}
        saveLabel="Upload"
        // onEditClick={() => {
        //   history.push("/profile/edit");
        // }}
      ></CollactionFooter>
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

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsList);
