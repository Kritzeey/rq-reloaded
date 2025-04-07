import Particles from "@/components/Particles";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="h-full position-relative">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>
    </div>
  );
}
