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
import { AnimatedText } from "../components/AnimatedText";
import { Particle } from "../components/Particle";
import { BackgroundImage } from "../components/BackgroundImage";
import { ShineEffect } from "../components/ShineEffect";
import { springs } from "../animations/springConfigs";

type Feature = {
  readonly icon: string;
  readonly text: string;
};

type Props = {
  readonly headline?: readonly string[];
  readonly features?: readonly Feature[];
  readonly productImage?: string;
  readonly bgImage?: string;
  readonly overlayColor?: string;
  readonly accentColor?: string;
};

const DEFAULT_FEATURES: readonly Feature[] = [
  { icon: "💊", text: "1日1粒飲むだけ" },
  { icon: "🔥", text: "脂肪燃焼サポート成分配合" },
  { icon: "🌿", text: "天然由来成分100%" },
  { icon: "✨", text: "管理栄養士監修" },
];

export const SolutionScene: React.FC<Props> = ({
  headline = ["飲むだけ簡単", "ダイエット"],
  features = DEFAULT_FEATURES,
  productImage = "images/supplement-pills.jpg",
  bgImage = "images/supplement-pills.jpg",
  overlayColor = "#0f1a2e",
  accentColor = "#FFD700",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entryOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const exitOpacity = interpolate(frame, [280, 300], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const productProgress = spring({
    frame: Math.max(0, frame - 20),
    fps,
    config: springs.bouncy,
  });
  const productScale = interpolate(productProgress, [0, 1], [0.3, 1]);
  const productOpacity = interpolate(productProgress, [0, 1], [0, 1]);
  const productFloat = Math.sin(frame * 0.06) * 8;

  return (
    <AbsoluteFill style={{ opacity: entryOpacity * exitOpacity }}>
      <BackgroundImage
        src={bgImage}
        overlayColor={overlayColor}
        overlayOpacity={0.65}
        zoom
        zoomRange={[1.05, 1.15]}
        blur={4}
        entryAnimation="fade"
      />

      <Particle count={30} color="rgba(0, 212, 170, 0.4)" spread="full" />
      <ShineEffect delay={30} color="rgba(255, 215, 0, 0.12)" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 200,
          padding: "200px 60px 60px",
          gap: 25,
        }}
      >
        {headline.map((line, i) => (
          <AnimatedText
            key={i}
            text={line}
            fontSize={i === 0 ? 72 : 100}
            fontWeight={900}
            color={i === 0 ? accentColor : "#FFFFFF"}
            animation="scaleIn"
            delay={i * 10}
            strokeColor={i > 0 ? `${accentColor}66` : undefined}
            strokeWidth={i > 0 ? 3 : 0}
          />
        ))}

        <div
          style={{
            opacity: productOpacity,
            transform: `scale(${productScale}) translateY(${productFloat}px)`,
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 30,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0, 212, 170, 0.3)",
          }}
        >
          <Img
            src={staticFile(productImage)}
            style={{
              width: 500,
              height: 300,
              objectFit: "cover",
              borderRadius: 30,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            width: "100%",
          }}
        >
          {features.map((feature, i) => {
            const featureDelay = 60 + i * 40;
            const featureProgress = spring({
              frame: Math.max(0, frame - featureDelay),
              fps,
              config: springs.snappy,
            });
            const slideX = interpolate(featureProgress, [0, 1], [200, 0]);
            const opacity = interpolate(featureProgress, [0, 1], [0, 1]);

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  transform: `translateX(${slideX}px)`,
                  opacity,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: "18px 28px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ fontSize: 44 }}>{feature.icon}</span>
                <span
                  style={{
                    fontFamily: "'Hiragino Kaku Gothic ProN', sans-serif",
                    fontSize: 38,
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
