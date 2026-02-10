import React from "react";
import { Composition } from "remotion";
import { GenericAdVideo } from "./videos/GenericAdVideo";
import { videoConfigs } from "./config/videoConfigs";

export const Root: React.FC = () => {
  return (
    <>
      {videoConfigs.map((config) => (
        <Composition
          key={config.id}
          id={config.id}
          component={GenericAdVideo}
          defaultProps={{ config }}
          durationInFrames={900}
          fps={30}
          width={1080}
          height={1920}
        />
      ))}
    </>
  );
};
