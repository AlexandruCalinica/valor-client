import React from "react";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import ValueCell from "../../../components/cell/ValueCell";

const AssetProfile = ({ error, loading, data }) => {
  if (error) return <h1>Error.</h1>;
  if (loading) return <Spinner animation="grow" variant="dark" />;

  const { summaryDetail, assetProfile } = data;

  return (
    <>
      <h1>Industry Analysis</h1>
      <Row>
        <ValueCell title="Industry" contentData={assetProfile?.industry} />
        <ValueCell title="Sector" contentData={assetProfile?.sector} />
        <ValueCell
          title="Market Capitalization"
          contentData={summaryDetail?.marketCap?.fmt}
        />
      </Row>
    </>
  );
};

export default AssetProfile;
