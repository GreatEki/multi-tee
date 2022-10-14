import React from "react";
import { Input, Label } from "src/components";
import UserDetailsCSS from "./UserDetails.module.css";

const UserDetails = () => {
  function handleChange() {}
  return (
    <div>
      <form className={UserDetailsCSS.form}>
        <h4> User Details </h4>
        <div className={UserDetailsCSS.formItem}>
          <Label> Name </Label>
          <Input type="text" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
