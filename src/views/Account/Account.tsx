import React from "react";
import { Input, Label, Button } from "src/components";
import AccountCSS from "./Account.module.css";

interface AccountData {
  email: string;
  password: string;
}

type Props = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const Account = (props: Props) => {
  const { email, password, updateFields } = props;

  return (
    <div>
      <form>
        <h3 className="form-caption"> Account </h3>
        <div className={AccountCSS.formItem}>
          <Label> Email </Label>
          <Input
            value={email}
            type="text"
            onChange={(e) => updateFields({ email: e.target.value })}
          />
        </div>
        <div className={AccountCSS.formItem}>
          <Label> Password </Label>
          <Input
            type="text"
            value={password}
            onChange={(e) => updateFields({ password: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default Account;
