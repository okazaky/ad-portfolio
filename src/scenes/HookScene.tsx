import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { Particle } from "../components/Particle";
import { BackgroundImage } from "../components/BackgroundImage";
import { ShineEffect } from "../components/ShineEffect";
import { springs } from "../animations/springConfigs";

type Props = {
  readonly lines?: readonly string[];
  readonly bgImage?: string;
  readonly accentColor?: string;
  readonly overlayColor?: string;
};

export const HookScene: React.FC<Props> = ({
  lines = ["まだ無理な", "食事制限してるの？"],
  bgImage = "images/hook-woman.jpg",
  accentColor = "#FFD700",
  overlayColor = "#1a0a2e",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const flashOpacity = interpolate(frame, [0, 5, 10], [1, 0.8, 0], {
    extrapolateRight: "clamp",
  });

  const bgShake = frame < 20 ? Math.sin(frame * 2) * 5 : 0;

  const lineProgress = spring({
    frame: Math.max(0, frame - 30),
    fps,
    config: springs.snappy,
  });
  const lineWidth = interpolate(lineProgress, [0, 1], [0, 700]);

  const exitOpacity = interpolate(frame, [70, 90], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        transform: `translateX(${bgShake}px)`,
        opacity: exitOpacity,
      }}
    >
      <BackgroundImage
        src={bgImage}
        overlayColor={overlayColor}
        overlayOpacity={0.55}
        zoom
        zoomRange={[1, 1.15]}
        entryAnimation="zoomIn"
      />

      <AbsoluteFill
        style={{
          backgroundColor: `rgba(255, 255, 255, ${flashOpacity})`,
          zIndex: 10,
        }}
      />

      <Particle count={25} color={`${accentColor}99`} spread="full" />
      <ShineEffect delay={15} />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 60px",
          gap: 30,
        }}
      >
        {lines.map((line, i) => (
          <AnimatedText
            key={i}
            text={line}
            fontSize={i === 0 ? 76 : 88}
            fontWeight={900}
            color={i === 0 ? "#FFFFFF" : accentColor}
            animation="explosive"
            delay={8 + i * 10}
            strokeColor={i > 0 ? "rgba(0,0,0,0.5)" : undefined}
            strokeWidth={i > 0 ? 3 : 0}
          />
        ))}

        <div
          style={{
            width: lineWidth,
            height: 8,
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            borderRadius: 4,
            marginTop: 10,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
