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
import { CountUp } from "../components/CountUp";
import { AnimatedText } from "../components/AnimatedText";
import { Particle } from "../components/Particle";
import { BackgroundImage } from "../components/BackgroundImage";
import { ShineEffect } from "../components/ShineEffect";
import { springs } from "../animations/springConfigs";

type Stat = {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
  readonly color: string;
};

type Props = {
  readonly title?: string;
  readonly stats?: readonly Stat[];
  readonly personImage?: string;
  readonly overlayColor?: string;
};

const DEFAULT_STATS: readonly Stat[] = [
  { value: 95, suffix: "%", label: "お客様満足度", color: "#00D4AA" },
  { value: 87, suffix: "%", label: "リピート率", color: "#FFD700" },
  { value: 50, suffix: "万個", label: "累計販売数", color: "#FF6B9D" },
];

export const ProofScene: React.FC<Props> = ({
  title = "選ばれる理由",
  stats = DEFAULT_STATS,
  personImage = "images/happy-fit.jpg",
  overlayColor = "#0a1628",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entryOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const exitOpacity = interpolate(frame, [190, 210], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const personProgress = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: springs.smooth,
  });
  const personOpacity = interpolate(personProgress, [0, 1], [0, 1]);
  const personScale = interpolate(personProgress, [0, 1], [1.1, 1]);

  return (
    <AbsoluteFill style={{ opacity: entryOpacity * exitOpacity }}>
      <BackgroundImage
        src={personImage}
        overlayColor={overlayColor}
        overlayOpacity={0.7}
        zoom
        zoomRange={[1, 1.06]}
        entryAnimation="zoomIn"
      />

      <Particle count={15} color="rgba(255, 215, 0, 0.3)" spread="full" />
      <ShineEffect delay={50} color="rgba(0, 212, 170, 0.15)" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "160px 60px 60px",
          gap: 35,
        }}
      >
        <AnimatedText
          text={title}
          fontSize={68}
          fontWeight={900}
          color="#FFFFFF"
          animation="fadeUp"
        />

        <div
          style={{
            opacity: personOpacity,
            transform: `scale(${personScale})`,
            width: 260,
            height: 260,
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid rgba(0, 212, 170, 0.5)",
            boxShadow: "0 10px 40px rgba(0, 212, 170, 0.2)",
          }}
        >
          <Img
            src={staticFile(personImage)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 35,
            width: "100%",
            alignItems: "center",
          }}
        >
          {stats.map((stat, i) => {
            const statDelay = 20 + i * 40;
            const cardProgress = spring({
              frame: Math.max(0, frame - statDelay),
              fps,
              config: springs.snappy,
            });
            const cardOpacity = interpolate(cardProgress, [0, 1], [0, 1]);
            const cardScale = interpolate(cardProgress, [0, 1], [0.8, 1]);

            return (
              <div
                key={i}
                style={{
                  opacity: cardOpacity,
                  transform: `scale(${cardScale})`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderRadius: 24,
                  padding: "24px 50px",
                  width: "90%",
                  border: `1px solid ${stat.color}33`,
                  backdropFilter: "blur(8px)",
                }}
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  fontSize={88}
                  color={stat.color}
                  fontWeight={900}
                  delay={statDelay + 10}
                  duration={45}
                />
                <span
                  style={{
                    fontFamily: "'Hiragino Kaku Gothic ProN', sans-serif",
                    fontSize: 34,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
