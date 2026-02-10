import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { GradientBackground } from "../components/GradientBackground";
import { HookScene } from "../scenes/HookScene";
import { ProblemScene } from "../scenes/ProblemScene";
import { SolutionScene } from "../scenes/SolutionScene";
import { ProofScene } from "../scenes/ProofScene";
import { CTAScene } from "../scenes/CTAScene";
import { SCENE_TIMING } from "../animations/springConfigs";
import type { VideoConfig } from "../config/types";

type Props = {
  readonly config: VideoConfig;
};

export const GenericAdVideo: React.FC<Props> = ({ config }) => {
  return (
    <AbsoluteFill>
      <GradientBackground
        colors={[...config.theme.background]}
        angle={135}
        animateShift
      />

      <Sequence
        from={SCENE_TIMING.hook.start}
        durationInFrames={SCENE_TIMING.hook.duration}
      >
        <HookScene
          lines={config.hook.lines}
          bgImage={config.hook.bgImage}
          accentColor={config.hook.accentColor}
          overlayColor={config.theme.overlay}
        />
      </Sequence>

      <Sequence
        from={SCENE_TIMING.problem.start}
        durationInFrames={SCENE_TIMING.problem.duration}
      >
        <ProblemScene
          items={config.problem.items}
          bgImage={config.problem.bgImage}
        />
      </Sequence>

      <Sequence
        from={SCENE_TIMING.solution.start}
        durationInFrames={SCENE_TIMING.solution.duration}
      >
        <SolutionScene
          headline={config.solution.headline}
          features={config.solution.features}
          productImage={config.solution.productImage}
          bgImage={config.solution.bgImage}
        />
      </Sequence>

      <Sequence
        from={SCENE_TIMING.proof.start}
        durationInFrames={SCENE_TIMING.proof.duration}
      >
        <ProofScene
          title={config.proof.title}
          stats={config.proof.stats}
          personImage={config.proof.personImage}
        />
      </Sequence>

      <Sequence
        from={SCENE_TIMING.cta.start}
        durationInFrames={SCENE_TIMING.cta.duration}
      >
        <CTAScene
          badge={config.cta.badge}
          price={config.cta.price}
          priceNote={config.cta.priceNote}
          ctaText={config.cta.ctaText}
          scarcity={config.cta.scarcity}
          productImage={config.cta.productImage}
          bgImage={config.cta.bgImage}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
