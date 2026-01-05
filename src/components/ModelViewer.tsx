import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

/* =========================
   Model
========================= */
const Model: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  scene.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  return <primitive object={scene} scale={4} position={[3, -12, -4]} />;
};

/* =========================
   Lights
========================= */

// KEY LIGHT (main shadow)
const KeyLight = () => {
  const ref = useRef<THREE.DirectionalLight>(null);
  // useHelper(ref, DirectionalLightHelper, 2, "yellow");

  return (
    <directionalLight
      ref={ref}
      position={[6, 12, 6]}
      intensity={1}
      castShadow
      shadow-mapSize-width={4048}
      shadow-mapSize-height={4048}
      shadow-camera-near={1}
      shadow-camera-far={40}
      shadow-camera-left={-15}
      shadow-camera-right={15}
      shadow-camera-top={15}
      shadow-camera-bottom={-15}
      shadow-bias={-0.0002}
    />
  );
};

// FILL LIGHT (removes dark side)
const FillLight = () => {
  const ref = useRef<THREE.DirectionalLight>(null);
  // useHelper(ref, DirectionalLightHelper, 2, "cyan");

  return (
    <directionalLight
      ref={ref}
      position={[-6, 8, 6]}
      intensity={1}
      castShadow={false}
    />
  );
};

// RIM LIGHT (edge highlight)
const RimLight = () => {
  const ref = useRef<THREE.DirectionalLight>(null);
  // useHelper(ref, DirectionalLightHelper, 2, "magenta");

  return (
    <directionalLight
      ref={ref}
      position={[0, 6, -8]}
      intensity={1}
      castShadow={false}
    />
  );
};

// ACCENT POINT LIGHT (soft highlight)
const AccentPointLight = () => {
  const ref = useRef<THREE.PointLight>(null);
  // useHelper(ref, PointLightHelper, 0.5, "white");

  return (
    <pointLight
      ref={ref}
      position={[0, 5, 5]}
      intensity={20}
      distance={30}
      decay={2}
      castShadow={false}
    />
  );
};

/* =========================
   Viewer
========================= */
const ModelViewer: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  return (
    <Canvas
      shadows="soft"
      style={{ backgroundColor: "#8ec5ff", height: 540 }}
      camera={{ position: [2, 2, 6], fov: 45 }}
    >
      {/* Base light */}
      <ambientLight intensity={0.9} />

      {/* Lighting setup */}
      <KeyLight />
      <FillLight />
      <RimLight />
      <AccentPointLight />

      {/* Model */}
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        /* Horizontal rotation limits (left ↔ right) */
        minAzimuthAngle={-Math.PI / 6} // -30°
        maxAzimuthAngle={Math.PI / 6} // +30°
        /* Vertical rotation limits (up ↕ down) */
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 1.8}
        target={[0, 1, 0]}
      />
    </Canvas>
  );
};

export default ModelViewer;

useGLTF.preload("/model.glb");
