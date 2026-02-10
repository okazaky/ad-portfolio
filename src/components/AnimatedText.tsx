import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { springs } from "../animations/springConfigs";

type AnimationType = "fadeUp" | "scaleIn" | "typewriter" | "explosive";

type Props = {
  readonly text: string;
  readonly fontSize?: number;
  readonly color?: string;
  readonly fontWeight?: number;
  readonly animation?: AnimationType;
  readonly delay?: number;
  readonly strokeColor?: string;
  readonly strokeWidth?: number;
  readonly lineHeight?: number;
  readonly textAlign?: React.CSSProperties["textAlign"];
};

export const AnimatedText: React.FC<Props> = ({
  text,
  fontSize = 64,
  color = "#FFFFFF",
  fontWeight = 900,
  animation = "fadeUp",
  delay = 0,
  strokeColor,
  strokeWidth = 0,
  lineHeight = 1.3,
  textAlign = "center",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const adjustedFrame = Math.max(0, frame - delay);

  const baseStyle: React.CSSProperties = {
    fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif",
    fontSize,
    fontWeight,
    color,
    lineHeight,
    textAlign,
    whiteSpace: "pre-wrap",
    wordBreak: "keep-all",
    WebkitTextStroke: strokeWidth > 0 ? `${strokeWidth}px ${strokeColor ?? color}` : undefined,
  };

  if (animation === "fadeUp") {
    const progress = spring({
      frame: adjustedFrame,
      fps,
      config: springs.snappy,
    });
    const translateY = interpolate(progress, [0, 1], [60, 0]);
    const opacity = interpolate(progress, [0, 1], [0, 1]);
    return (
      <div
        style={{
          ...baseStyle,
          transform: `translateY(${translateY}px)`,
          opacity,
        }}
      >
        {text}
      </div>
    );
  }

  if (animation === "scaleIn") {
    const progress = spring({
      frame: adjustedFrame,
      fps,
      config: springs.bouncy,
    });
    const scale = interpolate(progress, [0, 1], [0.3, 1]);
    const opacity = interpolate(progress, [0, 1], [0, 1]);
    return (
      <div
        style={{
          ...baseStyle,
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        {text}
      </div>
    );
  }

  if (animation === "explosive") {
    const progress = spring({
      frame: adjustedFrame,
      fps,
      config: springs.explosive,
    });
    const scale = interpolate(progress, [0, 1], [3, 1]);
    const opacity = interpolate(progress, [0, 1], [0, 1]);
    return (
      <div
        style={{
          ...baseStyle,
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        {text}
      </div>
    );
  }

  // typewriter
  const charsToShow = Math.floor(
    interpolate(adjustedFrame, [0, text.length * 2], [0, text.length], {
      extrapolateRight: "clamp",
    })
  );
  return (
    <div style={baseStyle}>
      {text.slice(0, charsToShow)}
      {charsToShow < text.length && (
        <span style={{ opacity: frame % 10 < 5 ? 1 : 0 }}>|</span>
      )}
    </div>
  );
};
