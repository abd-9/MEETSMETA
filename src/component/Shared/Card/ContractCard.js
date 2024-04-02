import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { CardActionArea, Skeleton } from "@mui/material";
import { Label } from "../Lable";
import XSvg from "../icons/XSvg";
import AddIcon from "@mui/icons-material/Add";

export default function ContractCard({ id, title, imageUrl, desc, coverUrl }) {
  return (
    <Card className=" xcard  contract-card ">
      {/* <CardActionArea> */}
      <div className="card-header">
        <h5 className=" card-title ">{title}</h5>
      </div>

      <CardContent className=" py-3 px-4 ">
        <Label fontClassName=" text-sm " className="card-description ">
          {desc}
        </Label>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}

export function SkeletonContractCard() {
  return (
    <Card className=" xcard  contract-card  ">
      <CardContent className=" py-3 px-4 ">
        <Skeleton
          className="mb-4"
          variant="rounded"
          width={"100%"}
          height={35}
        />
        <Skeleton
          className="my-1"
          variant="rounded"
          width={"100%"}
          height={10}
        />
        <Skeleton
          className="my-1"
          variant="rounded"
          width={"100%"}
          height={10}
        />
        <Skeleton
          className="my-1"
          variant="rounded"
          width={"100%"}
          height={10}
        />
        <Skeleton
          className="my-1"
          variant="rounded"
          width={"50%"}
          height={10}
        />
      </CardContent>
    </Card>
  );
}
