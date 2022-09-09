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

import PlayerAccordionCard, {
  SkeletonPlayerRow,
} from "../Shared/Card/PlayerAccordionCard";

const PlayersList = ({ Settings }) => {
  return (
    <Grid container rowGap={1} id="players-list" className="px-5 py-4">
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
                imageUrl={"/images/test/player1.png"}
                sponserPeriod="30"
                total="-"
                status="Playing..."
                playerId="0x12r45... Qws3"
                remaining="10"
                isFavorit={false}
              />
            </Grid>
          );
        })}

        <Grid item container rowGap={1} xs={12}>
          <SkeletonPlayerRow />
          <SkeletonPlayerRow />
          <SkeletonPlayerRow />
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
