import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Actions } from "../../store/actions";
import SidebarHeader from "../MainSection/Header";
import { Grid } from "@mui/material";
import ButtonGradient, { Button, CircleButton } from "../Shared/Buttons";
import SettingsContainer from "../MainSection/SettingsMainContainer";
import xHistory from "../../utilities/history";
import { SECTIONS_ROUTE } from "../../routes";
import { useHistory } from "react-router-dom";
import { AP, ListAnimation } from "../Shared/Animation";

import ContractCard, {
  SkeletonContractCard,
} from "../Shared/Card/ContractCard";
import AddIcon from "@mui/icons-material/Add";
import { Label } from "../Shared/Lable";
import PlayerAccordionCard from "../Shared/Card/PlayerAccordionCard";

const PlayersList = ({ Settings }) => {
  return (
    <Grid container rowSpacing={2} id="players-list" className="px-5 py-4">
      <AP exitBeforeEnter>
        {[1, 2, 3, 4, 5, 6, 7].map((index) => {
          return (
            <Grid
              component={ListAnimation}
              item
              xs={12}
              delay={`${0.2 * (index / 10)}`}
              key={index}
            >
              <PlayerAccordionCard
                title="White Sands Parcel Pass"
                desc="White Sands is your home in an open and evolving metaverse proudly built on NFT Worlds."
                coverUrl={"/images/test/bg1.png"}
                imageUrl={"/images/test/pro1.png"}
              />
            </Grid>
          );
        })}

        <Grid item xs={4}>
          <ListAnimation delay={0.2 * ([1, 2, 3, 4, 5, 6, 7].length / 10)}>
            <SkeletonContractCard />
          </ListAnimation>
        </Grid>
      </AP>
    </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);
