import React from "react";
import { RouteComponentProps } from "@reach/router";
import { UserForm } from "../../components/UserForm/UserForm";

interface Props extends RouteComponentProps {}

export const LoginPage: React.FC<Props> = () => {
  return (
    <div className="login-page">
      <UserForm type="login" />
    </div>
  );
};
