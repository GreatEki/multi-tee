import React from "react";

interface Props {
  children: React.ReactNode;
}

const Label: React.FC<Props> = ({ children }) => {
  return <label>{children} </label>;
};

export default Label;
