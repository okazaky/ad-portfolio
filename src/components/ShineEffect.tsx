import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

type Props = {
  readonly delay?: number;
  readonly color?: string;
  readonly angle?: number;
};

export const ShineEffect: React.FC<Props> = ({
  delay = 0,
  color = "rgba(255, 255, 255, 0.15)",
  angle = -45,
}) => {
  const frame = useCurrentFrame();
  const adjustedFrame = Math.max(0, frame - delay);

  const position = interpolate(adjustedFrame, [0, 40], [-100, 200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(adjustedFrame, [0, 5, 30, 40], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden", pointerEvents: "none", opacity }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: `${position}%`,
          width: "30%",
          height: "100%",
          background: `linear-gradient(${angle}deg, transparent 0%, ${color} 50%, transparent 100%)`,
          transform: `skewX(${angle}deg)`,
        }}
      />
    </AbsoluteFill>
  );
};
