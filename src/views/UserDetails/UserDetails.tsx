import React, { FormEvent } from "react";
import { Input, Label, Button } from "src/components";
import UserDetailsCSS from "./UserDetails.module.css";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

interface Props {
  updateFields: (field: Partial<UserData>) => void;
}

const UserDetails = (props: Props): JSX.Element => {
  return (
    <>
      <h3 className="form-caption"> User Details </h3>
      <div className={UserDetailsCSS.formItem}>
        <Label> First Name </Label>
        <Input
          type="text"
          required
          onChange={(e) => props.updateFields({ firstName: e.target.value })}
        />
      </div>
      <div className={UserDetailsCSS.formItem}>
        <Label> Last Name </Label>
        <Input
          type="text"
          required
          onChange={(e) => props.updateFields({ lastName: e.target.value })}
        />
      </div>
      <div className={UserDetailsCSS.formItem}>
        <Label> Age </Label>
        <Input
          type="text"
          required
          onChange={(e) => props.updateFields({ age: e.target.value })}
        />
      </div>
    </>
  );
};

export default UserDetails;
