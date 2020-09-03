import React from "react";
import useYahoo from "../../../customHooks/useYahoo";

import SecFilings from "./SecFilings";

const Business = () => {
  const profile = useYahoo(["profile"]);

  return (
    <>
      <h1>Business Model Analysis</h1>
      <SecFilings {...profile} />
    </>
  );
};

export default Business;
