import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { springs } from "../animations/springConfigs";

type Props = {
  readonly text: string;
  readonly backgroundColor?: string;
  readonly textColor?: string;
  readonly fontSize?: number;
  readonly delay?: number;
  readonly width?: number;
  readonly height?: number;
  readonly borderRadius?: number;
};

export const PulseButton: React.FC<Props> = ({
  text,
  backgroundColor = "#FF6B35",
  textColor = "#FFFFFF",
  fontSize = 48,
  delay = 0,
  width = 720,
  height = 120,
  borderRadius = 60,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const adjustedFrame = Math.max(0, frame - delay);

  const entryProgress = spring({
    frame: adjustedFrame,
    fps,
    config: springs.bouncy,
  });

  const entryScale = interpolate(entryProgress, [0, 1], [0, 1]);
  const entryOpacity = interpolate(entryProgress, [0, 1], [0, 1]);

  const pulseFrame = Math.max(0, adjustedFrame - 15);
  const pulseScale = 1 + Math.sin(pulseFrame * 0.15) * 0.04;

  const glowIntensity = interpolate(
    Math.sin(pulseFrame * 0.12),
    [-1, 1],
    [10, 30]
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: entryOpacity,
        transform: `scale(${entryScale * pulseScale})`,
      }}
    >
      <div
        style={{
          width,
          height,
          borderRadius,
          backgroundColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: `0 0 ${glowIntensity}px ${backgroundColor}, 0 4px 20px rgba(0,0,0,0.3)`,
        }}
      >
        <span
          style={{
            fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif",
            fontSize,
            fontWeight: 900,
            color: textColor,
            letterSpacing: "0.05em",
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};
