import React from "react";
import { Redirect } from "react-router-dom";

const Landing = () => {
  const token = localStorage.getItem("auth-token");
  if (!token) {
    return <Redirect to="/login" />;
  }
  return <div>This is landing page</div>;
};

export default Landing;
