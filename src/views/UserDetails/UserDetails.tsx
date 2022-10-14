import React from "react";
import { Input, Label, Button } from "src/components";
import UserDetailsCSS from "./UserDetails.module.css";

interface Props {
  currentStep: number;
}

const UserDetails = (props: Props) => {
  function handleChange() {}

  function handleNext() {}
  return (
    <div>
      <form className={UserDetailsCSS.form}>
        <h5 className="step"> {props.currentStep} / 2 </h5>
        <h3 className="form-caption"> User Details </h3>
        <div className={UserDetailsCSS.formItem}>
          <Label> First Name </Label>
          <Input type="text" onChange={handleChange} />
        </div>
        <div className={UserDetailsCSS.formItem}>
          <Label> Last Name </Label>
          <Input type="text" onChange={handleChange} />
        </div>
        <div className={UserDetailsCSS.formItem}>
          <Label> Age </Label>
          <Input type="text" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
