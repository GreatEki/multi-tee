import React from "react";
import { Input, Label, Button } from "src/components";
import AddressCSS from "./Address.module.css";

interface AddressData {
  street: string;
  city: string;
  state: string;
}

type Props = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const Address = (props: Props) => {
  const { street, city, state, updateFields } = props;
  function handleChange() {}

  function handleNext() {}
  return (
    <div>
      <form>
        <h3 className="form-caption"> Address </h3>
        <div className={AddressCSS.formItem}>
          <Label> Street </Label>
          <Input
            type="text"
            value={street}
            onChange={(e) => updateFields({ street: e.target.value })}
          />
        </div>
        <div className={AddressCSS.formItem}>
          <Label> City </Label>
          <Input
            type="text"
            value={city}
            onChange={(e) => updateFields({ street: e.target.value })}
          />
        </div>
        <div className={AddressCSS.formItem}>
          <Label> State </Label>
          <Input
            type="text"
            value={state}
            onChange={(e) => updateFields({ street: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default Address;
