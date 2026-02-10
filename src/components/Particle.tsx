import React, { useMemo } from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

type ParticleData = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
};

type Props = {
  readonly count?: number;
  readonly color?: string;
  readonly maxSize?: number;
  readonly spread?: "full" | "bottom" | "center";
};

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export const Particle: React.FC<Props> = ({
  count = 30,
  color = "rgba(255, 255, 255, 0.6)",
  maxSize = 8,
  spread = "full",
}) => {
  const frame = useCurrentFrame();

  const particles: readonly ParticleData[] = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const yBase = spread === "bottom"
        ? 0.5 + seededRandom(i * 7 + 1) * 0.5
        : spread === "center"
          ? 0.3 + seededRandom(i * 7 + 1) * 0.4
          : seededRandom(i * 7 + 1);

      return {
        x: seededRandom(i * 3 + 0) * 100,
        y: yBase * 100,
        size: 2 + seededRandom(i * 3 + 2) * maxSize,
        speed: 0.3 + seededRandom(i * 5 + 3) * 0.7,
        opacity: 0.2 + seededRandom(i * 5 + 4) * 0.6,
        delay: seededRandom(i * 11 + 5) * 60,
      };
    });
  }, [count, maxSize, spread]);

  return (
    <AbsoluteFill style={{ overflow: "hidden", pointerEvents: "none" }}>
      {particles.map((p, i) => {
        const adjustedFrame = Math.max(0, frame - p.delay);
        const yOffset = interpolate(
          adjustedFrame * p.speed,
          [0, 300],
          [0, -120],
          { extrapolateRight: "extend" }
        );
        const xWobble = Math.sin(adjustedFrame * 0.05 * p.speed) * 10;
        const opacity = interpolate(
          adjustedFrame,
          [0, 15, 200, 250],
          [0, p.opacity, p.opacity, 0],
          { extrapolateRight: "clamp" }
        );

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: color,
              opacity,
              transform: `translate(${xWobble}px, ${yOffset}px)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
