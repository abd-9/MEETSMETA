import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Label } from "../Shared/Lable";

const steps = ["Networks", "Contract"];

export function CustomizedSteppers({ activeStep, setActiveStep }) {
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        alternativeLabel
        className="contract-stepper"
        activeStep={activeStep}
      >
        {steps.map((label, index) => (
          <Step key={label} connector={<div />} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: "12px",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "var(--menu-color)",
      opacity: 0.5,
      transition: "all .3s",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "var(--menu-color)",
      opacity: 1,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 12,
    border: 0,
    transition: "all .3s",
    backgroundColor: "var(--menu-color)",
    opacity: 0.5,
    borderRadius: 1,
    width: "calc(100% + 10px)",
    marginLeft: "-6px",
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "var(--menu-color)",
  opacity: 0.5,

  zIndex: 1,
  color: "#fff",
  width: 35,
  height: 35,
  display: "flex",
  fill: "red",
  stroke: "red",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    opacity: 1,
    backgroundColor: "var(--menu-color)",
    // boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    opacity: 1,
    backgroundColor: "var(--menu-color)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  //   const icons = {
  //     1: (
  //       <Label fontColor="text-white" className="font-bold ">
  //         {props.icon}
  //       </Label>
  //     ),
  //     2: (
  //       <Label fontColor="text-white" className="font-bold">
  //         2
  //       </Label>
  //     ),
  //   };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      <Label fontColor="text-white" className="font-bold ">
        {props.icon}
      </Label>
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export default function AddContractStepper({ activeStep, setActiveStep }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        className="add-corntract-stepper "
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step completed={activeStep >= index} key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
