import React, { useState } from "react";
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";

import addIcon from "../../assets/images/addStory.svg";

const StoryQueue = ({ queue, handleQueue }) => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "auto"
      }}
    >
        <Image
          src={addIcon}
          onClick={handleQueue}
          style={{ minWidth: 58, width: 58, cursor: "pointer" }}
          roundedCircle
        />
        {queue.map((item, idx) => (
          <Link key={idx} to={`/story/${item.id}`}>
            <Image
              src={item.src}
              roundedCircle
              style={{ minWidth: 58, maxWidth: 58 }}
            />
          </Link>
        ))}
    </div>
  );
};

export default StoryQueue;
