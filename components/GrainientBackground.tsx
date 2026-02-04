'use client';

import Grainient from '@/components/Grainient';

export default function GrainientBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Grainient
        color1="#3d3846"
        color2="#7dec02"
        color3="#5e5c64"
        timeSpeed={0.25}
        colorBalance={0}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
    </div>
  );
}
