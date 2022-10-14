import React, { FormEvent } from "react";
import { Input, Label, Button } from "src/components";
import UserDetailsCSS from "./UserDetails.module.css";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type Props = UserData & {
  updateFields: (field: Partial<UserData>) => void;
};

const UserDetails = (props: Props): JSX.Element => {
  const { firstName, lastName, age, updateFields } = props;
  return (
    <>
      <h3 className="form-caption"> User Details </h3>
      <div className={UserDetailsCSS.formItem}>
        <Label> First Name </Label>
        <Input
          type="text"
          value={firstName}
          required
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
      </div>
      <div className={UserDetailsCSS.formItem}>
        <Label> Last Name </Label>
        <Input
          type="text"
          required
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
      </div>
      <div className={UserDetailsCSS.formItem}>
        <Label> Age </Label>
        <Input
          type="text"
          value={age}
          required
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </div>
    </>
  );
};

export default UserDetails;
