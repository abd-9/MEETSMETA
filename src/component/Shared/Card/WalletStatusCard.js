import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { CardActionArea, Chip, Grid } from "@mui/material";
import { Label } from "../Lable";
import XSvg from "../icons/XSvg";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "../Buttons";
import xHistory from "../../../utilities/history";
import { SECTIONS_ROUTE } from "../../../routes";

export default function WalletStatusCard({
  id,
  title,
  imageUrl,
  desc,
  coverUrl,
}) {
  const handleContinue = () => {
    xHistory.push(SECTIONS_ROUTE.collection.list);
  };
  return (
    <Card className=" xcard  wallet-status-card ">
      <div className="card-header  flexCenter">
        <div className="">
          <Label className=" card-title "> Connect your wallet.</Label>
          <Label className="card-description ">
            {" "}
            Connect with one of our available wallet providers or create a new
            one.
          </Label>
        </div>
      </div>
      <Grid
        direction={"column"}
        container
        justifyContent={"space-between"}
        // alignContent="space-between"
        className="card-containt"
      >
        <Grid item className="py-2 ">
          <Grid item xs={12} className="flexCenter">
            <img src="/images/metamask.png" style={{ width: "30px" }}></img>{" "}
            <div className="h6 text-bold mb-0 mx-2">MetaMask wallet</div>
            <Chip
              label="Connected"
              className="px-4 h-6 rounded-lg bg-label-b9 font-primary ml-3"
              color="secondary"
            />
          </Grid>
        </Grid>
        <Grid
          item
          alignSelf={"flex-end"}
          justifySelf={"flex-end"}
          className="px-2"
        >
          <Button
            onClick={handleContinue}
            className={"rounded-full"}
            color="primary"
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export function EmptyCollectionCard() {
  return (
    <Card className=" xcard   wallet-status-card ">
      <CardActionArea className="flexCenter h-full">
        {/* <XSvg name={"plus"}></XSvg> */}
        <AddIcon className=" " style={{ color: "#9b9b9b", fontSize: "5em" }} />
      </CardActionArea>
    </Card>
  );
}
