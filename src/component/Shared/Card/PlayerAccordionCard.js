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
import XSvg from "../icons/XSvg";
import AddIcon from "@mui/icons-material/Add";
import Checkbox, { StarCheckbox } from "../Checkbox";

export default function PlayerAccordionCard({
  id,
  title,
  imageUrl,
  desc,
  coverUrl,
}) {
  return (
    <Accordion className="xcard player-accordion-card">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" />}
        aria-controls="panel1a-content"
        className="card-player-header"
      >
        <Label fontClassName=" text-sm " className="card-title ">
          {title}
        </Label>
        <div>
          <StarCheckbox
            labelClassName={"text-sm fw-500 "}
            className="mx-1 "
          ></StarCheckbox>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Label fontClassName=" text-sm " className="card-description ">
          {desc}
        </Label>
      </AccordionDetails>
    </Accordion>
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
