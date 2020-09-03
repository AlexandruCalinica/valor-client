import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import MathJax from "react-mathjax-preview";

import { evaluate } from "mathjs";

const FormulaItem = ({ formulaString }) => {
  const [formula, setFormula] = useState(null);
  const [result, setResult] = useState(null);

  const handleOnChange = (e) => {
    setFormula(e.target.value);
  };

  const handleResult = () => setResult(evaluate(formula).toFixed(1));

  const x = '`' + formulaString + '`';
  const math = String.raw`${x}`;

  useEffect(() => {
    setFormula(formulaString);
  }, [formulaString]);

  return (
    <>
      <Row>
        <Col md={8}>
          <input
            className="input light-text"
            defaultValue={formulaString}
            onChange={handleOnChange}
          />
        </Col>
        <Col className="d-flex justify-content-center-between align-items-center">
          <Button size="lg" variant="outline-light" onClick={handleResult}>
            Run
          </Button>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center mt-5">
        <MathJax math={math} className="expression" />
      </Row>
      <Row>
        {result ? <h1 style={{ fontSize: "2vw" }}>= {result} $</h1> : null}
      </Row>
    </>
  );
};

export default FormulaItem;
