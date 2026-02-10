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
import { PulseButton } from "../components/PulseButton";
import { Particle } from "../components/Particle";
import { BackgroundImage } from "../components/BackgroundImage";
import { ShineEffect } from "../components/ShineEffect";
import { springs } from "../animations/springConfigs";

type Props = {
  readonly badge?: string;
  readonly price?: string;
  readonly priceNote?: string;
  readonly ctaText?: string;
  readonly scarcity?: string;
  readonly productImage?: string;
  readonly bgImage?: string;
  readonly overlayColor?: string;
  readonly buttonColor?: string;
};

export const CTAScene: React.FC<Props> = ({
  badge = "🔥 今だけ限定価格",
  price = "980円",
  priceNote = "送料無料",
  ctaText = "今すぐチェック",
  scarcity = "※ 残りわずか",
  productImage = "images/supplement-pills.jpg",
  bgImage = "images/supplement-bottle.jpg",
  overlayColor = "#1a0520",
  buttonColor = "#FF6B35",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entryOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const urgencyProgress = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: springs.bouncy,
  });
  const urgencyScale = interpolate(urgencyProgress, [0, 1], [0, 1]);
  const urgencyOpacity = interpolate(urgencyProgress, [0, 1], [0, 1]);

  const arrowBounce = Math.sin(frame * 0.2) * 10;

  const pulseRadius = interpolate(
    Math.sin(frame * 0.1),
    [-1, 1],
    [40, 60]
  );

  return (
    <AbsoluteFill style={{ opacity: entryOpacity }}>
      <BackgroundImage
        src={bgImage}
        overlayColor={overlayColor}
        overlayOpacity={0.75}
        zoom
        zoomRange={[1, 1.1]}
        blur={6}
        entryAnimation="fade"
      />

      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at center 40%, rgba(255, 107, 53, 0.2) 0%, transparent ${pulseRadius}%)`,
        }}
      />

      <Particle count={40} color="rgba(255, 107, 53, 0.4)" spread="full" />
      <Particle count={20} color="rgba(255, 215, 0, 0.3)" spread="center" />
      <ShineEffect delay={20} />
      <ShineEffect delay={70} color="rgba(255, 215, 0, 0.1)" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 60px",
          gap: 35,
        }}
      >
        <div
          style={{
            opacity: urgencyOpacity,
            transform: `scale(${urgencyScale})`,
          }}
        >
          <div
            style={{
              backgroundColor: "#FF4757",
              borderRadius: 16,
              padding: "14px 44px",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 4px 20px rgba(255, 71, 87, 0.4)",
            }}
          >
            <span
              style={{
                fontFamily: "'Hiragino Kaku Gothic ProN', sans-serif",
                fontSize: 34,
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
              }}
            >
              {badge}
            </span>
          </div>
        </div>

        <AnimatedText
          text="初回限定"
          fontSize={56}
          fontWeight={700}
          color="rgba(255,255,255,0.9)"
          animation="fadeUp"
          delay={10}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 15,
          }}
        >
          <AnimatedText
            text={price}
            fontSize={140}
            fontWeight={900}
            color="#FFD700"
            animation="scaleIn"
            delay={20}
            strokeColor="rgba(0,0,0,0.4)"
            strokeWidth={3}
          />

          <div
            style={{
              opacity: interpolate(frame, [25, 40], [0, 1], {
                extrapolateRight: "clamp",
              }),
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <Img
              src={staticFile(productImage)}
              style={{
                width: 300,
                height: 160,
                objectFit: "cover",
                borderRadius: 20,
              }}
            />
          </div>
        </div>

        <AnimatedText
          text={priceNote}
          fontSize={44}
          fontWeight={700}
          color="#00D4AA"
          animation="fadeUp"
          delay={35}
        />

        <div
          style={{
            fontSize: 56,
            transform: `translateY(${arrowBounce}px)`,
            opacity: interpolate(frame, [40, 55], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          👇
        </div>

        <PulseButton
          text={ctaText}
          backgroundColor={buttonColor}
          textColor="#FFFFFF"
          fontSize={48}
          delay={45}
          width={760}
          height={130}
          borderRadius={65}
        />

        <div
          style={{
            opacity: interpolate(frame, [80, 95], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          <AnimatedText
            text={scarcity}
            fontSize={36}
            fontWeight={600}
            color="#FF6B6B"
            animation="fadeUp"
            delay={85}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
