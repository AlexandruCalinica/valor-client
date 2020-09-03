import React from "react";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import CustomTable from "../../../components/table/CustomTable";

const SecFilings = ({ error, loading, data }) => {
  if (error) return <h1>Error.</h1>;
  if (loading) return <Spinner animation="grow" variant="dark" />;

  const { secFilings } = data;
  return (
    <>
      <h1>SEC Filings</h1>
      <Row>
        <CustomTable
          data={secFilings.filings}
          header={["date", "type", "title", "edgarUrl"]}
          size="sm"
          variant="dark"
          striped
          bordered
          hover
        >
          {(rowData) => (
            <>
              <td>{rowData.date}</td>
              <td>{rowData.type}</td>
              <td>{rowData.title}</td>
              <td>
                <a href={rowData.edgarUrl}>Browse SEC file</a>
              </td>
            </>
          )}
        </CustomTable>
      </Row>
    </>
  );
};

export default SecFilings;
