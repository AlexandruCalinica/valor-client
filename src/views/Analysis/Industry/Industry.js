import React from "react";
import useYahoo from "../../../customHooks/useYahoo";
import AssetProfile from "./AssetProfile";
import CompanySnapshot from "./CompanySnapshot";
import SummaryInfo from "./SummaryInfo";
import MarketCap from "./MarketCap";

import { useQuery } from "@apollo/client";
import { GET_COMPANY_TAG_TEXT } from "../../../queries/company";

const Industry = () => {
  const getDataTagText = useQuery(GET_COMPANY_TAG_TEXT, {
    variables: { identifier: "AAPL", tag: "ceo" },
  });

  const companySnapshot = useYahoo([
    "insights",
    "finance",
    "result",
    "companySnapshot",
  ]);
  const profile = useYahoo(["profile"]);
  const summary = useYahoo(["summary", "summaryProfile"]);

  return (
    <>
      <CompanySnapshot {...companySnapshot} />
      <SummaryInfo {...summary} />
      <AssetProfile {...profile} />
      <MarketCap {...getDataTagText} />
    </>
  );
};

export default Industry;
