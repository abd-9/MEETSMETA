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

const CollectionsList = ({ Settings }) => {
  const history = useHistory();

  return (
    <>
      <CollectionMainContainer>
        <SidebarHeader title="Collection"></SidebarHeader>
        <Grid container spacing={4} className="px-6 py-4">
          <Grid item xs={4}>
            <CollectionCard
              title="White Sands Parcel PassParcel PassParPassParcel PassParPassParcel PassParPassParcel PassParcel Pass"
              desc="White Sands is your home in an open and evolving metaverse proudly built on NFT Worlds."
              coverUrl={"images/test/bg1.png"}
              imageUrl={"images/test/pro1.png"}
            />
          </Grid>{" "}
          <Grid item xs={4}>
            <CollectionCard
              title="White Sands Parcel Pass"
              desc="White Sands is your home in an open and evolving metaverse proudly built on NFT Worlds."
              coverUrl={"images/test/bg1.png"}
              imageUrl={"images/test/pro1.png"}
            />
          </Grid>{" "}
          <Grid item xs={4}>
            <CollectionCard
              title="White Sands Parcel Pass"
              desc="White Sands is your home in an open and evolving metaverse proudly built on NFT Worlds."
              coverUrl={"images/test/bg1.png"}
              imageUrl={"images/test/pro1.png"}
            />
          </Grid>
          <Grid item xs={4}>
            <CollectionCard
              title="White Sands Parcel Pass"
              desc="White Sands is your home in an open and evolving metaverse proudly built on NFT Worlds."
              coverUrl={"images/test/bg1.png"}
              imageUrl={"images/test/pro1.png"}
            />
          </Grid>
          <Grid item xs={4}>
            <EmptyCollectionCard />
          </Grid>
        </Grid>
      </CollectionMainContainer>
      <CollactionFooter
        onSaveClick={() => {
          // document.getElementById("themeForm").click();
          xHistory.push("/profile/view");
        }}
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
