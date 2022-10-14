import { useState } from "react";
import { Button } from "src/components";
import UserDetails from "src/views/UserDetails/UserDetails";
import Address from "src/views/Address/Address";
import { useMultiStepForm } from "src/hooks/useMultiStepForm";

function App() {
  const { steps, currentStep, stepIndex, next, back } = useMultiStepForm([
    <UserDetails />,
    <Address />,
  ]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <h5 className="step">
        {" "}
        {stepIndex + 1} / {steps.length}{" "}
      </h5>
      {currentStep}
      <section className="btn-area">
        <div>
          <Button btnText="Back" onClick={back} />
        </div>
        <div>
          <Button btnText="Next" onClick={next} />
        </div>
      </section>
    </div>
  );
}

export default App;
