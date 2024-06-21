'use client'

import { Suspense, useState } from "react";

import Logo from "@/components/homepage/Logo";
import Spinner from "@/components/homepage/Spinner";
import Text from "@/components/homepage/Text";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Galaxy from "@/components/models/Galaxy";

const Home = () => {
  const [model, setModel] = useState(false);

  const handleClick = () => {
    setModel(true);
  };

  return !model ? (
    <div className="min-h-screen text-white bg-[#070709] flex flex-col justify-evenly items-center font-mono gap-y-4">
      <div className="absolute top-0 right-auto pt-10">
        <Logo />
      </div>
      <div>
        <Spinner handleClick={handleClick} />
      </div>
      <div>
        <Text />
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-[#070709]">
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 font-mono">
        <Logo />
      </div>
      <div>
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 110, position: [1, 2, 1] }}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={4} />
          <directionalLight position={[2, 1, 1]} />

          <Suspense fallback={null}>
            <Galaxy />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Home;