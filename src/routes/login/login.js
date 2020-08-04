import { Title } from "../../components";
import { Route } from "react-router-dom";
import React from "react";

const Login = () => (
  <Route
    path="/login"
    render={(props) => <Title {...props} text={`login page`} />}
  />
);

export default Login;
