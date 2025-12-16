"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, Center, Float } from "@react-three/drei";
import * as THREE from "three";
import trojanLogo from "../assets/trojan_3d_embossed.png";

// Custom Material to handle Black Background Transparency on the fly
const TextureMaterial = ({ texture, opacity = 1 }) => {
  const materialRef = useRef();

  const onBeforeCompile = (shader) => {
    shader.fragmentShader = `
      uniform float uCutoff;
      ${shader.fragmentShader}
    `.replace(
      "#include <map_fragment>",
      `
      #include <map_fragment>
      // 3D Logo Logic: Discard black/very dark pixels to create transparency
      // Calculate luminance of the texture at this pixel
      float luminance = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
      
      // If it's effectively black, discard it to make it transparent
      if (luminance < 0.05) discard;
      
      // Optional: Boost saturation for defined Red & Gold
      vec3 luma = vec3(0.299, 0.587, 0.114);
      float gray = dot(diffuseColor.rgb, luma);
      diffuseColor.rgb = mix(vec3(gray), diffuseColor.rgb, 1.3); // 1.3x Saturation
      diffuseColor.rgb *= 1.1; // Slight brightness boost
      `
    );
  };

  return (
    <meshStandardMaterial
      ref={materialRef}
      map={texture}
      transparent={true}
      side={THREE.DoubleSide}
      roughness={0.3}     // Shiny but has texture
      metalness={0.8}     // Gold-like metallic feel
      onBeforeCompile={onBeforeCompile}
      envMapIntensity={1.5}
      opacity={opacity}
    />
  );
};

function LayeredLogo({ layers = 15, depth = 0.2 }) {
  const texture = useTexture(trojanLogo);
  const group = useRef();

  // Gentle Rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      // Y-axis rotation (continuous, slow, elegant)
      group.current.rotation.y = Math.sin(t * 0.5) * 0.3; // Swing back and forth or continuous?
      // User asked for "continuous smooth rotation". 
      // Let's do a full continuous rotation.
      group.current.rotation.y = t * 0.3;

      // Slight X-axis tilt for 3D feel
      group.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }
  });

  // Create multiple layers to simulate extrusion/thickness


  return (
    <group ref={group}>
      <Center>
        {Array.from({ length: layers }).map((_, i) => (
          <mesh
            key={i}
            position={[0, 0, (i - layers / 2) * (depth / layers)]}
          >
            <planeGeometry args={[7, 7]} /> {/* Increased size 3x */}
            <TextureMaterial texture={texture} opacity={2.0} />
          </mesh>
        ))}
        {/* Add a rim/side mesh if we could, but stacked planes work well for "holographic" 3D objects */}
      </Center>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      {/* Premium Studio Lighting - Neutral to show true colors */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
        color="#ffffff" // White light for clarity
      />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <LayeredLogo layers={12} depth={0.15} />
      </Float>
    </>
  );
}

export default function TrojanHelmet() {
  return (
    <div className="absolute inset-0 z-[1] w-full h-full pointer-events-none flex items-center justify-center">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
