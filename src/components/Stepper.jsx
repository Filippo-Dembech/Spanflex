import { useState } from "react";
import Button from "./Button";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Stepper({ children }) {
  const allowedTypes = ["Step", "ConditionalStep"];

  // validate children
  for (let child of children) {
    if (!allowedTypes.includes(child.type.name))
      throw new Error(
        "Only <Step> components are allowed as <Stepper> children.",
      );
  }

  const steps = children;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  if (currentStepIndex >= steps.length) return;

  const currentStep = steps[currentStepIndex];
    
  const stepStyle = "flex flex-col animate-slide-in m-7 max-w-200 flex-grow relative items-center justify-center";
  const buttonStyle = "self-end mt-4 md:mx-5 md:text-xl";

  if (currentStep.type.name === "ConditionalStep")
    return (
      <div className={stepStyle} key={currentStepIndex}>
        {currentStep}
        {currentStep.props.condition && (
          <Button
            className={buttonStyle}
            onClick={() => setCurrentStepIndex((curr) => curr + 1)}
            icon={<FaArrowAltCircleRight />}
          >
            Continue
          </Button>
        )}
      </div>
    );

  return (
    <div className={stepStyle} key={currentStepIndex}>
      {currentStep}
      <Button
        className={buttonStyle}
        onClick={() => setCurrentStepIndex((curr) => curr + 1)}
        icon={<FaArrowAltCircleRight />}
      >
        Continue
      </Button>
    </div>
  );
}
