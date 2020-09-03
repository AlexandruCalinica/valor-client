import React from "react";
import Spinner from "react-bootstrap/Spinner";

import Lottie from "react-lottie";
import * as animationData from "./animation.json";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SummaryInfo = ({ error, loading, data }) => {
  if (error) return <h1>Error.</h1>;
  if (loading) return <Spinner animation="grow" variant="dark" />;

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Row>
      <Col className="grid-cell">
        <h1>Summary</h1>
        <p>{data.longBusinessSummary}</p>
      </Col>
      <Col className="grid-cell">
        <Lottie 
          options={defaultOptions}
          isStopped={false}
          isPaused={false}
        />
      </Col>
    </Row>
  );
};

export default SummaryInfo;
