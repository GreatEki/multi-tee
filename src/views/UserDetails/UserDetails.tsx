import React from "react";
import { Input, Label, Button } from "src/components";
import UserDetailsCSS from "./UserDetails.module.css";

interface Props {}

const UserDetails = (props: Props) => {
  function handleChange() {}

  function handleNext() {}
  return (
    <div>
      <form>
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
