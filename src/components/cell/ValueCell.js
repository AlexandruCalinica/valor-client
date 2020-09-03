import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";

const ValueCell = ({ title, contentData, footer, footerData }) => {
  const [mainData, setMainData] = useState();
  const [secondaryData, setSecondaryData] = useState();

  useEffect(() => {
    if (typeof contentData === "number") {
      setMainData(contentData.toFixed(2));
    } else {
      setMainData(contentData);
    }

    if (typeof footerData === "number") {
      setSecondaryData(footerData.toFixed(2));
    } else {
      setSecondaryData(footerData);
    }
  }, []);

  return (
    <Col xs={6} md={4} className="grid-cell">
      <h5>
        <u>{title}</u>
        <span className="m-1"></span>
        {!mainData && (
          <Badge pill variant="warning">
            warning
          </Badge>
        )}
      </h5>
      {mainData && typeof contentData === "number" ? (
        <h1>{mainData}</h1>
      ) : mainData ? (
        <h3>{mainData}</h3>
      ) : (
        <h1 className="text-warning">N/A</h1>
      )}
      {footer && footerData ? (
        <p>
          <small>{footer}:</small> {secondaryData}
        </p>
      ) : null}
    </Col>
  );
};

export default ValueCell;