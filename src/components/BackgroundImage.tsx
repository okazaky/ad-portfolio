import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { springs } from "../animations/springConfigs";

type Props = {
  readonly src: string;
  readonly opacity?: number;
  readonly blur?: number;
  readonly zoom?: boolean;
  readonly zoomRange?: readonly [number, number];
  readonly overlayColor?: string;
  readonly overlayOpacity?: number;
  readonly entryAnimation?: "fade" | "zoomIn" | "slideUp";
  readonly entryDuration?: number;
};

export const BackgroundImage: React.FC<Props> = ({
  src,
  opacity = 1,
  blur = 0,
  zoom = true,
  zoomRange = [1, 1.1],
  overlayColor = "#000000",
  overlayOpacity = 0.4,
  entryAnimation = "fade",
  entryDuration = 15,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = zoom
    ? interpolate(frame, [0, 300], [zoomRange[0], zoomRange[1]], {
        extrapolateRight: "clamp",
      })
    : 1;

  let entryOpacity = 1;
  let translateY = 0;
  let entryScale = 1;

  if (entryAnimation === "fade") {
    entryOpacity = interpolate(frame, [0, entryDuration], [0, 1], {
      extrapolateRight: "clamp",
    });
  } else if (entryAnimation === "zoomIn") {
    const progress = spring({
      frame,
      fps,
      config: springs.smooth,
      durationInFrames: entryDuration * 2,
    });
    entryScale = interpolate(progress, [0, 1], [1.3, 1]);
    entryOpacity = interpolate(frame, [0, entryDuration], [0, 1], {
      extrapolateRight: "clamp",
    });
  } else if (entryAnimation === "slideUp") {
    const progress = spring({
      frame,
      fps,
      config: springs.smooth,
    });
    translateY = interpolate(progress, [0, 1], [100, 0]);
    entryOpacity = interpolate(progress, [0, 1], [0, 1]);
  }

  return (
    <AbsoluteFill style={{ opacity: entryOpacity * opacity }}>
      <AbsoluteFill
        style={{
          transform: `scale(${scale * entryScale}) translateY(${translateY}px)`,
          filter: blur > 0 ? `blur(${blur}px)` : undefined,
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>
      {/* Dark overlay */}
      <AbsoluteFill
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
    </AbsoluteFill>
  );
};
