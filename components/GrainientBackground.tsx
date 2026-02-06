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
        colorBalance={0.4}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={3}
        warpAmplitude={100}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.3}
        grainScale={2}
        grainAnimated={false}
        contrast={1}
        gamma={1}
        saturation={0.9}
        centerX={0}
        centerY={0}
        zoom={1}
      />
    </div>
  );
}
