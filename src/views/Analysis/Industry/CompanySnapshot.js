import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import ValueCell from "../../../components/cell/ValueCell";

const CompanySnapshot = ({ error, loading, data }) => {
  if (error) return <h1>Error.</h1>;
  if (loading) return <Spinner animation="grow" variant="dark" />;

  const { company, sector } = data;

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>Snapshot</h1>
        </Col>
        <ValueCell
          title="Innovativeness"
          contentData={company.innovativeness}
          footer="Sector"
          footerData={sector.innovativeness}
        />
        <ValueCell
          title="Hiring"
          contentData={company.hiring}
          footer="Sector"
          footerData={sector.hiring}
        />
        <ValueCell
          title="Sustainability"
          contentData={company.sustainability}
          footer="Sector"
          footerData={sector.sustainability}
        />
        <ValueCell
          title="Insider Sentiment"
          contentData={company.insiderSentiments}
          footer="Sector"
          footerData={sector.insiderSentiments}
        />
        <ValueCell
          title="Earnings Reports"
          contentData={company.earningsReports}
          footer="Sector"
          footerData={sector.earningsReports}
        />
        <ValueCell
          title="Dividends"
          contentData={company.dividends}
          footer="Sector"
          footerData={sector.dividends}
        />
      </Row>
    </>
  );
};

export default CompanySnapshot;