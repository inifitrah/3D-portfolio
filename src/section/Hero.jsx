import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import Robot from "../components/Robot";
import Avatar from "../components/Avatar";
import { Leva, useControls } from "leva";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center>
      <p className="text-center font-semibold">{progress} % loaded</p>
    </Html>
  );
}

export const Hero = () => {
  const x = useControls("Avatar", {
    positionX: { value: 2.5, min: -10, max: 10 },
    positionY: { value: 2.5, min: -10, max: 10 },
    positionZ: { value: 2.5, min: -10, max: 10 },
    scale: { value: 1, min: 0.5, max: 10 },
  });
  return (
    <section
      className="text-white min-h-screen flex flex-col relative"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space">
        <p className="hero_tag text-gray_gradient">
          Software Engineer{" "}
          <span className="waving-hand text-yellow-400">!</span>
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <OrbitControls />
            <Avatar
              scale={[x.scale, x.scale, x.scale]}
              rotation={[x.positionX, x.positionY, x.positionZ]}
              position={[x.positionX, x.positionY, x.positionZ]}
            />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
