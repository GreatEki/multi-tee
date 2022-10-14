import React from "react";
import { Input, Label, Button } from "src/components";
import AddressCSS from "./Address.module.css";

interface Props {}

const Address = (props: Props) => {
  function handleChange() {}

  function handleNext() {}
  return (
    <div>
      <form>
        <h3 className="form-caption"> Address </h3>
        <div className={AddressCSS.formItem}>
          <Label> Street </Label>
          <Input type="text" onChange={handleChange} />
        </div>
        <div className={AddressCSS.formItem}>
          <Label> City </Label>
          <Input type="text" onChange={handleChange} />
        </div>
        <div className={AddressCSS.formItem}>
          <Label> State </Label>
          <Input type="text" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default Address;
