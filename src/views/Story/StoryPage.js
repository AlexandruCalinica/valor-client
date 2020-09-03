import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import StoryQueue from "../../components/stories/StoryQueue";
import StoryProgress from "../../components/stories/StoryProgress";
import StoryFrames from "../../components/stories/StoryFrames";

import * as storiesData from "./getStories";
import * as storyData from "./getStory";

const StoryPage = () => {
  const [frame, setFrame] = useState(0);
  const [story, setStory] = useState(0);
  const [queue, setQueue] = useState([]);
  const framesLength = queue.length > 0 ? queue[story].frames.length : 0;

  const handleTap = () => {
    setFrame((v) => (v >= framesLength - 1 ? 0 : v + 1));
  };

  const handleQueue = (story) => {
    setQueue([...queue, storyData.data[0]]);
  };

  const handleStory = () => {
    setStory((v) => v + 1);
  };

  return (
    <>
      <Container>
        {/* <Row> */}
          <StoryQueue queue={queue} handleQueue={handleQueue} />
          <StoryProgress frame={frame} framesLength={framesLength} />
        {/* </Row> */}
      </Container>
      <StoryFrames
        storyData={queue[story]}
        frame={frame}
        handleTap={handleTap}
      />
    </>
  );
};

export default StoryPage;
