import React from "react";
import ModelViewer from "./ModelViewer";

const Hero: React.FC = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] lg:h-[540px] overflow-hidden bg-white">
        {/* 3D Model */}
        <div className="absolute inset-0 pointer-events-auto">
          <ModelViewer modelPath="/models/my_room_2.glb" />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center sm:items-center pointer-events-none">
          <div className="w-full px-5 sm:px-8 lg:px-16">
            <div className="max-w-md sm:max-w-lg mx-auto sm:mx-0">
              <h1
                className="
          text-white font-bold drop-shadow-lg leading-tight
          text-center sm:text-center
          translate-x-0 sm:translate-x-8 md:translate-x-12
        "
              >
                <span className="block text-5xl sm:text-2xl md:text-3xl">
                  Hello! I’m
                </span>

                <span className="block text-6xl sm:text-4xl md:text-5xl lg:text-6xl mt-10">
                  Thi Han Hein
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
