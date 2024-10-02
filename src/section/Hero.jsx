import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import CardProfile from "../components/CardProfile";
import CardProfileMobileView from "../components/CardProfileMobileView";

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
      <div className="lg:ml-20 w-full md:w-1/2  flex text-center md:text-start flex-col sm:mt-30 md:mt-60 mt-20 c-space z-[100]">
        <CardProfileMobileView />
        <p className="">I'm a</p>
        <p className="hero_tag text-gray_gradient">Software Engineer, </p>
        <p className="hero_tag text-gray_gradient ">Educator and </p>
        <p className="hero_tag text-gray_gradient ">Creator </p>
        <p className="mt-5 max-w-sm md:max-w-none mx-auto md:mx-0">
          I'm a software engineer, educator, and creator. I write about
          programming, productivity, and personal development. I'm passionate
          about building products that make a difference.
        </p>
      </div>

      <div className=" hidden md:flex absolute inset-0">
        <CardProfile />
      </div>
    </section>
  );
};
