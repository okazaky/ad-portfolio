import { SpringConfig } from "remotion";

export const springs = {
  bouncy: {
    damping: 8,
    mass: 0.5,
    stiffness: 100,
    overshootClamping: false,
  } satisfies SpringConfig,

  snappy: {
    damping: 12,
    mass: 0.4,
    stiffness: 200,
    overshootClamping: false,
  } satisfies SpringConfig,

  smooth: {
    damping: 20,
    mass: 1,
    stiffness: 80,
    overshootClamping: false,
  } satisfies SpringConfig,

  gentle: {
    damping: 15,
    mass: 0.8,
    stiffness: 60,
    overshootClamping: false,
  } satisfies SpringConfig,

  explosive: {
    damping: 6,
    mass: 0.3,
    stiffness: 300,
    overshootClamping: false,
  } satisfies SpringConfig,
} as const;

export const SCENE_TIMING = {
  hook: { start: 0, duration: 90 },
  problem: { start: 90, duration: 150 },
  solution: { start: 240, duration: 300 },
  proof: { start: 540, duration: 210 },
  cta: { start: 750, duration: 150 },
} as const;
