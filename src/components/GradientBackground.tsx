import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

type Props = {
  readonly colors: readonly string[];
  readonly angle?: number;
  readonly animateShift?: boolean;
};

export const GradientBackground: React.FC<Props> = ({
  colors,
  angle = 135,
  animateShift = true,
}) => {
  const frame = useCurrentFrame();

  const shift = animateShift
    ? interpolate(frame, [0, 900], [0, 30], {
        extrapolateRight: "clamp",
      })
    : 0;

  const gradientStops = colors
    .map((color, i) => {
      const position =
        (i / (colors.length - 1)) * 100 + shift;
      return `${color} ${position}%`;
    })
    .join(", ");

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${angle}deg, ${gradientStops})`,
      }}
    />
  );
};
