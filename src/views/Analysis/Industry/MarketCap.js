import React from "react";

const MarketCap = ({ error, loading, data }) => {
  if (error) return <p>Error!</p>;
  if (loading) return <p>...loading</p>;

  console.log(data);

  return (
    <p>Test</p>
  )
}

export default MarketCap;