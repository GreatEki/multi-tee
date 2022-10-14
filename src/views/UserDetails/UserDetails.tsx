import React from "react";
import { Input, Label, Button } from "src/components";
import UserDetailsCSS from "./UserDetails.module.css";

const UserDetails = () => {
  function handleChange() {}

  function handleNext() {}
  return (
    <div>
      <form className={UserDetailsCSS.form}>
        <h4> User Details </h4>
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

        <div className="flex-end">
          <Button btnText="Next" onClick={handleNext} />
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
