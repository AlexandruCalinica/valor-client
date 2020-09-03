import React from "react";
import { withRouter } from "react-router-dom";

import Container from "react-bootstrap/Container";
import NavBar from "../../components/navbar/Navbar";
import CustomRouter from "../../components/customRouter/CustomRouter";

import { Routes } from "./Routes";

const AnalysisPage = ({ match }) => {
  const { params } = match;
  const { indx } = params;

  return (
    <Container>
      <h1 className="light-text">{indx.toUpperCase()}</h1>
      <NavBar Routes={Routes} justify variant="pills" bgColor="dark-bg" />
      <CustomRouter Routes={Routes} />
    </Container>
  );
};

export default withRouter(AnalysisPage);
