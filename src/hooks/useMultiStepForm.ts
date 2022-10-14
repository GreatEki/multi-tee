import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [stepIndex, setStepIndex] = useState(0);

  function next() {
    setStepIndex((prev) => {
      if (prev > steps.length - 1) return 1;
      return prev + 1;
    });
  }

  function back() {
    setStepIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  function goTo(index: number) {
    setStepIndex(index);
  }

  return {
    steps,
    stepIndex,
    currentStep: steps[stepIndex],
    isFirstStep: stepIndex === 0,
    isLastStep: stepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
}
