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

const ContractList = ({ Settings, UpdateUserThemeSettings }) => {
  const [data, _setData] = useState(Settings.theme || {});

  const history = useHistory();

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  const handleAddContractClick = () => {
    xHistory.push(SECTIONS_ROUTE.contract.add);
  };

  const setData = (newData) => {
    _setData((old) => ({ ...old, ...newData }));
  };

  const NavButtons = () => {
    return (
      <CircleButton
        onClick={handleAddContractClick}
        color="secondary"
        className={
          " border-2 border-solid hover:!bg-gray-300 border-gray-300 !text-gray-400  !bg-gray-200 "
        }
      >
        <AddIcon
          className=" "
          style={{ color: "#9b9b9b", fontSize: "2.5em" }}
        />
      </CircleButton>
    );
  };

  return (
    <SettingsContainer>
      <SidebarHeader
        title="Contracts"
        endComponent={<NavButtons />}
      ></SidebarHeader>
      <EmptyContractSection></EmptyContractSection>

      <Grid container spacing={4} className="px-6 py-4">
        <AP exitBeforeEnter>
          {[1, 2, 3, 4, 5, 6, 7].map((index) => {
            return (
              <Grid item xs={4} key={index}>
                <ListAnimation delay={`${0.2 * (index / 10)}`} key={index}>
                  <ContractCard
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
              <SkeletonContractCard />
            </ListAnimation>
          </Grid>
        </AP>
      </Grid>
    </SettingsContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContractList);

const EmptyContractSection = () => {
  return (
    <div className="w-full py-8">
      <Label
        fontColor="text-titleColor"
        className="my-4 text-center font-medium"
        fontClassName="text-sm"
      >
        {"Let's get Started"}
      </Label>
      <Label
        fontColor="text-label-be"
        className="mx-auto my-4 text-center max-w-xl"
        fontClassName="text-sm"
      >
        {" "}
        Click the Plus button to begin the process of deploying your custom
        smart contract where your NFTs will be staked. You can deploy a minimum
        of 1 Contrat and a maximum of 3 contracts on the available preferred
        networks{" "}
      </Label>
    </div>
  );
};
