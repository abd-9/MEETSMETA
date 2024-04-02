import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { CardActionArea, Skeleton } from "@mui/material";
import { Label } from "../Lable";

export default function PaymentCard({
  balance = "140",
  token = "ETH",
  accountName = "Account name#23332",
  accountId = "0xE13e73D8e0f79934c692B529678aDB88F....dfd",
  imageUrl,
  perToken = "10.0",
}) {
  const formatBalance = `${balance} ${token}`;
  const formatInUsd = `${perToken} USD`;
  return (
    <Card className=" xcard payment-card ">
      <div className="card-header">
        <Label
          fontClassName=" text-sm "
          fontColor=" text-label-b9 "
          className=" mb-1 "
        >
          Current Balance
        </Label>
        <Label
          fontClassName=" text-xl "
          fontColor=" "
          className="font-bold card-title "
        >
          {formatBalance}
        </Label>
        <Label fontColor=" " className="font-medium  ">
          {formatInUsd}
        </Label>
      </div>
      <div
        className="user-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* <img className="h-20 w-auto" src={imageUrl} alt="user profile" /> */}
      </div>
      <div className="card-overlay"></div>
      <CardContent className=" card-containt">
        <Label
          fontClassName=" text-lg "
          fontColor=" text-cyan-5 "
          className=" my-1 mb-2 "
        >
          {accountName}
        </Label>
        <Label fontColor=" text-label-b9 " className=" my-1 flex ">
          {accountId}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.012"
            height="12.197"
            viewBox="0 0 15.012 12.197"
          >
            <path
              id="Path_174"
              data-name="Path 174"
              d="M181.448,153.576a.938.938,0,0,0-.938.938v6.568a.938.938,0,0,0,.938.938h9.382a.938.938,0,0,0,.938-.938v-6.568a.938.938,0,0,0-.938-.938Zm0-.938h9.382a1.876,1.876,0,0,1,1.877,1.876v6.568a1.876,1.876,0,0,1-1.877,1.877h-9.382a1.876,1.876,0,0,1-1.877-1.877v-6.568a1.876,1.876,0,0,1,1.877-1.876Zm.938,3.753h3.753v.938h-3.753Zm0,2.815h6.568v.938h-6.568Zm-3.753.938v-7.037a1.407,1.407,0,0,1,1.407-1.407h10.79a.469.469,0,1,0,0-.938H180.04a2.346,2.346,0,0,0-2.346,2.346v7.037a.469.469,0,1,0,.938,0Z"
              transform="translate(-177.695 -150.761)"
              fill="#99def5"
            />
          </svg>
        </Label>
      </CardContent>
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
