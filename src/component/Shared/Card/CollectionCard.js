import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Label } from "../Lable";
import XSvg from "../icons/XSvg";
import AddIcon from "@mui/icons-material/Add";

export default function CollectionCard({
  id,
  title,
  imageUrl,
  desc,
  coverUrl,
}) {
  return (
    <Card className=" xcard  collection-card ">
      <CardActionArea>
        <div
          className="cover-image-container"
          style={{ backgroundImage: `url(${coverUrl})` }}
        ></div>
        <CardContent className="flexCenter py-1 pb-2 px-2">
          <div className="w-1/4 flexCenter">
            <div
              style={{ backgroundImage: `url(${imageUrl})` }}
              className="prfile-image"
            ></div>
          </div>
          <div className="w-3/4 pl-3">
            <Label className="  mb-2  card-title text-xs">{title}</Label>
            <Label className="card-description ">{desc}</Label>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function EmptyCollectionCard() {
  return (
    <Card className=" xcard  collection-card ">
      <CardActionArea className="flexCenter h-full">
        {/* <XSvg name={"plus"}></XSvg> */}
        <AddIcon className=" " style={{ color: "#9b9b9b", fontSize: "5em" }} />
      </CardActionArea>
    </Card>
  );
}
