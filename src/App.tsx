import { FormEvent, useState } from "react";
import { Button } from "src/components";
import UserDetails from "src/views/UserDetails/UserDetails";
import Address from "src/views/Address/Address";
import Account from "src/views/Account/Account";
import { useMultiStepForm } from "src/hooks/useMultiStepForm";

interface UserInfoData {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  email: string;
  password: string;
}

function App() {
  const [user, setUser] = useState<UserInfoData>({
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(user);
  };

  const updateFields = (fields: Partial<UserInfoData>) => {
    setUser((prev) => ({ ...prev, ...fields }));
  };

  const { steps, currentStep, stepIndex, isFirstStep, isLastStep, next, back } =
    useMultiStepForm([
      <UserDetails updateFields={updateFields} />,
      <Address />,
      <Account />,
    ]);

  return (
    <div className="App">
      <h5 className="step">
        {" "}
        {stepIndex + 1} / {steps.length}{" "}
      </h5>
      <form onSubmit={handleSubmit}>
        {currentStep}

        <section className="btn-area">
          {!isFirstStep && (
            <div>
              <Button btnType="button" btnText="Back" onClick={back} />
            </div>
          )}

          <div>
            <Button btnType="submit" btnText={isLastStep ? "Finish" : "Next"} />
          </div>
        </section>
      </form>
    </div>
  );
}

export default App;
