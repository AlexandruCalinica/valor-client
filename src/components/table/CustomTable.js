import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import _ from "lodash";

const CustomTable = ({
  data,
  header,
  size,
  striped,
  bordered,
  hover,
  variant,
  children,
}) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data.map((item) => _.pick(item, header)));
  }, []);

  return (
    <Table
      size={size}
      striped={striped}
      bordered={bordered}
      hover={hover}
      variant={variant}
      responsive
      className="dark-bg"
    >
      <thead>
        <tr>
          {header.map((item, idx) => (
            <td key={idx}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData, idx) => (
          <tr key={idx}>{children(rowData)}</tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
