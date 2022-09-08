import { Group } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import xHistory from "../../../utilities/history";
import { EnterInWhenVisible } from "../../Shared/Animation";
import ButtonGradient from "../../Shared/Buttons";
import XSvg from "../../Shared/icons/XSvg";
import { Label } from "../../Shared/Lable";

const FirstSection = () => {
  useEffect(() => {
    const button = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    button?.addEventListener("click", () => {
      menu?.classList?.toggle("hidden");
    });
  }, []);
  return (
    <Grid className="  " container columnGap={4}>
      <Grid
        item
        container
        direction={"column"}
        justifyContent="space-between"
        xs
        component={EnterInWhenVisible}
        mDir="left"
        className="p-4 "
      >
        <Grid item>
          <Label
            className={""}
            fontClassName="text-4xl font-bold"
            fontColor="text-label-d2"
          >
            Play, earn, and transform <br />
            with MeetsMeta scholarship
          </Label>
        </Grid>
        <Grid item>
          <Label
            fontClassName="text-base  	 "
            className={"py-2 leading-8 pr-8 "}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud
          </Label>
        </Grid>

        <Grid container item justifyContent="space-between" className="px-4">
          <ButtonGradient
            customPadding="py-3 "
            className={"landing-page-blue-button w-1/3 rounded-xl"}
          >
            <div className=" text-2xl">Free Trials</div>
          </ButtonGradient>
          <ButtonGradient
            customPadding="py-3 "
            className={"landing-page-blue-button w-1/3 rounded-xl"}
          >
            <div className=" text-2xl">Update</div>
          </ButtonGradient>
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        component={EnterInWhenVisible}
        mDir="right"
        className=" "
      >
        <img
          style={{ widht: "20rem", height: "20rem" }}
          className="w-15 h-15  rounded-xl "
          src="/images/empty-video.png"
        />
      </Grid>
    </Grid>
  );
};

export default FirstSection;
