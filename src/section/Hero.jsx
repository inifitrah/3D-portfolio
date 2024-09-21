import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Hero = () => (
  <section className="text-white min-h-screen flex flex-col relative" id="home">
    <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
      <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
        Hi, I am Fitrah <span className="waving-hand">👋</span>
      </p>
      <p className="hero_tag text-gray_gradient">Software Engineer</p>
    </div>

    <div className="flex-grow">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <mesh scale={[8, 2, 2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  </section>
);
