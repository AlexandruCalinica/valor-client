import React, { Suspense } from "react";
import { Frame, Page } from "framer";

const Charts = React.lazy(() => import("../charts"));

const Test = () => (
  <div>
    <p>This is some random component</p>
  </div>
)

const StoryFrames = ({ storyData, frame, handleTap }) => {
  return (
    <Page
      currentPage={frame}
      defaultEffect={"coverflow"}
      gap={0}
      dragEnabled={false}
      alignment="center"
      width="100%"
      height="88vh"
      onTap={() => handleTap()}
    >
      {storyData ? (
        storyData.frames.map((item) => (
          <Frame
            backgroundColor={item.background}
            color={item.color}
            key={item.id}
          >
            {item.content}
            <Suspense fallback={<p>Loading chart...</p>}>
              <Charts />
            </Suspense>
          </Frame>
        ))
      ) : (
        <Frame backgroundColor="white">No data available at this time.</Frame>
      )}
    </Page>
  );
};

export default StoryFrames;
