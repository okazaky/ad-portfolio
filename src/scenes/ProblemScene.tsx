import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { BackgroundImage } from "../components/BackgroundImage";
import { springs } from "../animations/springConfigs";

type ProblemItem = {
  readonly emoji: string;
  readonly text: string;
};

type Props = {
  readonly items?: readonly ProblemItem[];
  readonly bgImage?: string;
  readonly overlayColor?: string;
};

const DEFAULT_ITEMS: readonly ProblemItem[] = [
  { emoji: "😞", text: "食事制限がツラい..." },
  { emoji: "😞", text: "リバウンドの繰り返し..." },
  { emoji: "😞", text: "運動する時間がない..." },
  { emoji: "😢", text: "もう何をやっても続かない" },
];

export const ProblemScene: React.FC<Props> = ({
  items = DEFAULT_ITEMS,
  bgImage = "images/diet-struggle.jpg",
  overlayColor = "#0a0a0a",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entryOpacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });
  const exitOpacity = interpolate(frame, [130, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pulseScale = 1 + Math.sin(frame * 0.03) * 0.01;

  const vignetteOpacity = interpolate(frame, [0, 100], [0.3, 0.7], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: entryOpacity * exitOpacity }}>
      <BackgroundImage
        src={bgImage}
        overlayColor={overlayColor}
        overlayOpacity={0.6}
        zoom
        zoomRange={[1, 1.08]}
        blur={2}
        entryAnimation="fade"
      />

      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,${vignetteOpacity}) 100%)`,
        }}
      />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 80px",
          gap: 50,
          transform: `scale(${pulseScale})`,
        }}
      >
        {items.map((item, i) => {
          const itemDelay = i * 25;
          const itemProgress = spring({
            frame: Math.max(0, frame - itemDelay),
            fps,
            config: springs.gentle,
          });
          const slideX = interpolate(itemProgress, [0, 1], [-80, 0]);
          const opacity = interpolate(itemProgress, [0, 1], [0, 1]);
          const isLast = i === items.length - 1;

          return (
            <div
              key={i}
              style={{
                width: "100%",
                opacity,
                transform: `translateX(${slideX}px)`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  padding: "24px 32px",
                  borderLeft: `4px solid ${isLast ? "#FF4757" : "rgba(255,255,255,0.2)"}`,
                }}
              >
                <span style={{ fontSize: 36 }}>{item.emoji}</span>
                <AnimatedText
                  text={item.text}
                  fontSize={48}
                  fontWeight={700}
                  color={isLast ? "#FF6B6B" : "#E0E0E0"}
                  animation="fadeUp"
                  delay={itemDelay}
                  textAlign="left"
                />
              </div>
            </div>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
