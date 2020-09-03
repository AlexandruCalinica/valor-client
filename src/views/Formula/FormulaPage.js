import React, { useEffect } from "react";

import FormulaItem from "../../components/formulas/FormulaItem";
import useYahoo from "../../customHooks/useYahoo";

import Container from "react-bootstrap/Container";


const FormulaPage = () => {

  const EPS = 23.1;
  const G = 12.4;
  const Y = 4.1;

  // const expression = "(" + EPS + "* (8.5 + 2 *" + G + ") * 4.4) /" + Y
  const expression = `(${EPS} * (8.5 + 2 * ${G}) * 4.4) / ${Y}`;

  // if (error) return <p>Error.</p>;
  // if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <span style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>Benjamin Graham's Intrinsic Value</h1>
        <span style={{ flex: 1 }} />
      </span>
      <FormulaItem formulaString={expression} />
    </Container>
  );
};

export default FormulaPage;
