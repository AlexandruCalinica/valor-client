import React from "react";

const StoryProgress = ({ frame, framesLength }) => {
  const frames = new Array(framesLength).fill().map(value => Math.random());
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        margin: 0,
        marginTop: 8,
        display: "flex",
        alignItems: "center"
      }}
    >
      {frames.map((item, idx) => (
        <div
          key={item}
          style={{
            flex: 1,
            background: frame >= idx ? "#DEF2E1" : "grey",
            opacity: 0.7,
            height: "4px",
            margin: "2px",
            borderRadius: "2px"
          }}
        />
      ))}
    </div>
  );
};

export default StoryProgress;
