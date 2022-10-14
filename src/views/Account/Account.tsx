import React from "react";
import { Input, Label, Button } from "src/components";
import AccountCSS from "./Account.module.css";

interface Props {}

const Account = (props: Props) => {
  function handleChange() {}

  function handleNext() {}
  return (
    <div>
      <form>
        <h3 className="form-caption"> Account </h3>
        <div className={AccountCSS.formItem}>
          <Label> First Name </Label>
          <Input type="text" onChange={handleChange} />
        </div>
        <div className={AccountCSS.formItem}>
          <Label> Last Name </Label>
          <Input type="text" onChange={handleChange} />
        </div>
        <div className={AccountCSS.formItem}>
          <Label> Age </Label>
          <Input type="text" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default Account;
