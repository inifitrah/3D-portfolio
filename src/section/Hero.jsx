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
import Vercel3dbadge from "../components/Vercel3dbadge";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center>
      <p className="text-center font-semibold">{progress} % loaded</p>
    </Html>
  );
}

export const Hero = () => {
  return (
    <section className="text-white min-h-screen flex relative" id="home">
      <div className="ml-20 w-1/2  flex flex-col sm:mt-60 mt-20 c-space z-[100]">
        <p className="">I'm a</p>
        <p className="hero_tag text-gray_gradient">Software Engineer, </p>
        <p className="hero_tag text-gray_gradient ">Educator </p>
        <p className="mt-10">
          I'm a software engineer, writer, and creator. I write about
          programming, productivity, and personal development. I'm passionate
          about building products that make a difference.
        </p>
      </div>

      <div className="w-full  hidden md:flex h-full absolute inset-0">
        <Leva hidden />
        <CardProfile />
      </div>
    </section>
  );
};
