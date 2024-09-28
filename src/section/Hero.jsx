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
import CardProfile from "../components/CardProfile";

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
    positionX: { value: 0, min: -10, max: 10 },
    positionY: { value: -10, min: -10, max: 10 },
    positionZ: { value: 0, min: -10, max: 10 },
    scale: { value: 20, min: 8, max: 20 },
  });
  return (
    <section className="text-white min-h-screen flex relative" id="home">
      <div className=" w-1/2  flex flex-col sm:mt-60 mt-20 c-space">
        <p className="">I'm a</p>
        <p className="hero_tag text-gray_gradient z-50">Software Engineer, </p>
        <p className="hero_tag text-gray_gradient z-50">Educator </p>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam
          corporis harum minima. Quos repellendus consequatur error dolore totam
          ad soluta asperiores consectetur.
        </p>
      </div>

      <div className="w-1/2 right-0 top-0 left-1/2 h-full absolute inset-0">
        <Leva hidden />
        {/* <Canvas className="w-full h-full">
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Robot
              scale={[x.scale, x.scale, x.scale]}
              rotation={[0, 0, 0]}
              position={[x.positionX, x.positionY, x.positionZ]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas> */}
        <CardProfile />
      </div>
    </section>
  );
};
