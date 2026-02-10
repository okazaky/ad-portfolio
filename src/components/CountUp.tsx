import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { springs } from "../animations/springConfigs";

type Props = {
  readonly value: number;
  readonly suffix?: string;
  readonly prefix?: string;
  readonly fontSize?: number;
  readonly color?: string;
  readonly fontWeight?: number;
  readonly delay?: number;
  readonly duration?: number;
};

export const CountUp: React.FC<Props> = ({
  value,
  suffix = "",
  prefix = "",
  fontSize = 96,
  color = "#00D4AA",
  fontWeight = 900,
  delay = 0,
  duration = 60,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const adjustedFrame = Math.max(0, frame - delay);

  const progress = spring({
    frame: adjustedFrame,
    fps,
    config: springs.smooth,
    durationInFrames: duration,
  });

  const currentValue = Math.round(interpolate(progress, [0, 1], [0, value]));

  const scaleProgress = spring({
    frame: adjustedFrame,
    fps,
    config: springs.bouncy,
  });
  const scale = interpolate(scaleProgress, [0, 1], [0.5, 1]);
  const opacity = interpolate(scaleProgress, [0, 1], [0, 1]);

  return (
    <div
      style={{
        fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif",
        fontSize,
        fontWeight,
        color,
        transform: `scale(${scale})`,
        opacity,
        textAlign: "center",
        letterSpacing: "-0.02em",
      }}
    >
      {prefix}
      {currentValue}
      {suffix}
    </div>
  );
};
