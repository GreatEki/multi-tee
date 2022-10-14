import { useState } from "react";
import { Button } from "src/components";
import UserDetails from "src/views/UserDetails/UserDetails";
import { useMultiStepForm } from "src/hooks/useMultiStepForm";

function App() {
  const { steps, currentStep, stepIndex, next, back } = useMultiStepForm([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <UserDetails currentStep={stepIndex + 1} />

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
