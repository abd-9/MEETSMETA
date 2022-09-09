import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardActionArea,
  Divider,
  Skeleton,
} from "@mui/material";
import { Label } from "../Lable";
import { StarCheckbox } from "../Checkbox";
import ButtonGradient, { Button } from "../Buttons";

export default function PlayerAccordionCard({
  id,
  title,
  imageUrl,
  sponserPeriod,
  total = "-",
  status,
  playerId,
  remaining,
  isFavorit,
}) {
  const [expanded, setExpanded] = React.useState(isFavorit);
  const toggleExpanded = () => {
    setExpanded((old) => !old);
  };
  return (
    <Accordion expanded={expanded} className="xcard player-accordion-card">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon onClick={toggleExpanded} color="primary" />}
        aria-controls="panel1a-content"
        className="card-player-header"
      >
        <Label fontClassName=" text-sm " className="card-title ">
          {title}
        </Label>
        <div className="flex grow px-10">
          <Label
            fontClassName=" text-sm details-fields"
            fontColor="text-primary"
            className="grow "
          >
            {status}
          </Label>

          <Label
            fontClassName=" text-sm details-fields"
            fontColor="text-label-b9 px-5 "
            className=" "
          >
            Earnings
          </Label>
          <Label
            fontClassName=" text-sm details-fields"
            fontColor=""
            className=" "
          >
            {total}
          </Label>
        </div>
        <div>
          <StarCheckbox
            labelClassName={"text-sm fw-500 "}
            className="mx-1 "
          ></StarCheckbox>
        </div>
      </AccordionSummary>
      <AccordionDetails className="p-4">
        <div className="flex px-4 ">
          <img className="h-20 w-auto" src={imageUrl} alt="user profile" />
          <table className="text-black w-full shadow-none">
            <thead>
              <tr>
                <th className=" text-base p-2 w-auto font-medium text-label-b9">
                  Player ID
                </th>
                <th className=" p-2 w-auto text-base font-medium text-label-b9">
                  Sponsor period
                </th>
                <th className=" p-2 w-auto text-base font-medium text-label-b9">
                  Remaining days
                </th>
                <th className=" p-2 w-auto text-base font-medium text-label-b9">
                  Earnings{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-base ">
                <td className="p-2 text-center"> {playerId}</td>
                <td className="p-2 text-center"> {sponserPeriod} days</td>
                <td className="p-2 text-center"> {remaining} days</td>
                <td className="p-2 text-center">{total}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full pt-2 flexEnd">
          <ButtonGradient onClick={toggleExpanded} color="primary">
            Cancel
          </ButtonGradient>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export function SkeletonPlayerRow() {
  return (
    <Skeleton
      className="rounded-full border-gray-300 border-1 opacity-80 "
      variant="rounded"
      width={"100%"}
      height={44}
    />
  );
}
