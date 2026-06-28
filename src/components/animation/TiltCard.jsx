import Tilt from "react-parallax-tilt";

// Light wrapper with sane defaults — subtle, premium-feeling tilt.
export default function TiltCard({ children, className = "", maxTilt = 8, glare = true }) {
  return (
    <Tilt
      tiltMaxAngleX={maxTilt}
      tiltMaxAngleY={maxTilt}
      perspective={1200}
      transitionSpeed={1200}
      glareEnable={glare}
      glareMaxOpacity={0.15}
      glareColor="#b2c5ff"
      glarePosition="all"
      glareBorderRadius="12px"
      scale={1.02}
      className={className}
    >
      {children}
    </Tilt>
  );
}
