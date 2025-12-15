// // import { useRef } from "react";
// // import { Canvas, useFrame, useThree } from "@react-three/fiber";
// // import {
// //   Float,
// //   MeshDistortMaterial,
// //   Stars,
// //   PerspectiveCamera,
// // } from "@react-three/drei";

// // const InitialHelmet = () => {
// //   const groupRef = useRef();
// //   const { mouse } = useThree();

// //   useFrame((state) => {
// //     const t = state.clock.getElapsedTime();

// //     if (!groupRef.current) return;

// //     /* 🔁 Slow orbital drift */
// //     groupRef.current.position.x = Math.sin(t * 0.15) * 1.2;
// //     groupRef.current.position.y = Math.cos(t * 0.1) * 0.6;

// //     /* 🧠 Mouse parallax (VERY subtle) */
// //     groupRef.current.rotation.y =
// //       t * 0.15 + mouse.x * 0.4;
// //     groupRef.current.rotation.x =
// //       Math.sin(t * 0.3) * 0.15 + mouse.y * 0.3;
// //   });

// //   return (
// //     <group ref={groupRef} scale={1.8} position={[0, 0, -1]}>
// //       {/* Core Helmet */}
// //       <mesh>
// //         <icosahedronGeometry args={[1, 1]} />
// //         <MeshDistortMaterial
// //           color="#18A0FF"
// //           distort={0.35}
// //           speed={1.8}
// //           roughness={0}
// //           metalness={0.8}
// //           wireframe
// //         />
// //       </mesh>

// //       {/* Inner Glow */}
// //       <mesh scale={0.75}>
// //         <dodecahedronGeometry args={[1, 0]} />
// //         <meshBasicMaterial
// //           color="#2563EB"
// //           wireframe
// //           transparent
// //           opacity={0.25}
// //         />
// //       </mesh>

// //       {/* Energy Field */}
// //       <mesh scale={2.3}>
// //         <sphereGeometry args={[1, 32, 32]} />
// //         <meshStandardMaterial
// //           color="#00F0FF"
// //           transparent
// //           opacity={0.04}
// //           wireframe
// //         />
// //       </mesh>
// //     </group>
// //   );
// // };

// // const TrojanHelmet = () => {
// //   return (
// //     <div className="absolute inset-0 -z-10 pointer-events-none">
// //       <Canvas>
// //         <PerspectiveCamera makeDefault position={[0, 0, 6]} />

// //         <ambientLight intensity={0.35} />
// //         <pointLight position={[8, 8, 8]} intensity={1.5} color="#18A0FF" />
// //         <pointLight position={[-8, -8, -8]} intensity={0.8} color="#FF3BAC" />

// //         <Stars
// //           radius={120}
// //           depth={60}
// //           count={4000}
// //           factor={4}
// //           fade
// //           speed={0.5}
// //         />

// //         <Float
// //           speed={1}
// //           rotationIntensity={0.2}
// //           floatIntensity={0.6}
// //         >
// //           <InitialHelmet />
// //         </Float>
// //       </Canvas>
// //     </div>
// //   );
// // };

// // export default TrojanHelmet;

// "use client";

// import { useRef } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import {
//   Float,
//   MeshDistortMaterial,
//   Stars,
//   PerspectiveCamera,
// } from "@react-three/drei";

// /* ================= SMALL INNER HELMET ================= */
// const InnerHelmet = () => {
//   const ref = useRef();
//   const { mouse } = useThree();

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     if (!ref.current) return;

//     /* subtle floating */
//     ref.current.position.x = Math.sin(t * 0.2) * 0.4;
//     ref.current.position.y = Math.cos(t * 0.25) * 0.3;

//     /* neural mouse response */
//     ref.current.rotation.y = t * 0.4 + mouse.x * 0.6;
//     ref.current.rotation.x = Math.sin(t * 0.3) * 0.2 + mouse.y * 0.4;
//   });

//   return (
//     <group ref={ref} scale={1.2}>
//       {/* Core */}
//       <mesh>
//         <icosahedronGeometry args={[1, 1]} />
//         <MeshDistortMaterial
//           color="#18A0FF"
//           distort={0.35}
//           speed={2}
//           roughness={0}
//           metalness={0.9}
//           wireframe
//         />
//       </mesh>

//       {/* Inner glow */}
//       <mesh scale={0.75}>
//         <dodecahedronGeometry args={[1, 0]} />
//         <meshBasicMaterial
//           color="#00F0FF"
//           wireframe
//           transparent
//           opacity={0.25}
//         />
//       </mesh>
//     </group>
//   );
// };

// /* ================= BIG OUTER HELMET ================= */
// const OuterHelmet = () => {
//   const ref = useRef();

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     if (!ref.current) return;

//     /* slow cinematic rotation */
//     ref.current.rotation.y = t * 0.08;
//     ref.current.rotation.x = Math.sin(t * 0.15) * 0.1;
//   });

//   return (
//     <group ref={ref} scale={3.8} position={[0, 0, -2]}>
//       {/* Shell */}
//       <mesh>
//         <icosahedronGeometry args={[1, 2]} />
//         <meshStandardMaterial
//           color="#020617"        // deep black-blue
//           roughness={0.9}
//           metalness={0.2}
//           wireframe
//           transparent
//           opacity={0.15}
//         />
//       </mesh>

//       {/* faint energy outline */}
//       <mesh scale={1.05}>
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshBasicMaterial
//           color="#0EA5E9"
//           wireframe
//           transparent
//           opacity={0.05}
//         />
//       </mesh>
//     </group>
//   );
// };

// /* ================= MAIN EXPORT ================= */
// const TrojanHelmet = () => {
//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       <Canvas>
//         <PerspectiveCamera makeDefault position={[0, 0, 7]} />

//         {/* Lights */}
//         <ambientLight intensity={0.35} />
//         <pointLight position={[10, 10, 10]} intensity={1.2} color="#18A0FF" />
//         <pointLight position={[-10, -10, -10]} intensity={0.6} color="#0EA5E9" />

//         {/* Stars */}
//         <Stars
//           radius={150}
//           depth={60}
//           count={5000}
//           factor={4}
//           fade
//           speed={0.4}
//         />

//         {/* Big shell */}
//         <OuterHelmet />

//         {/* Inner floating helmet */}
//         <Float speed={1} rotationIntensity={0.2} floatIntensity={0.6}>
//           <InnerHelmet />
//         </Float>
//       </Canvas>
//     </div>
//   );
// };

// export default TrojanHelmet;

"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";

/* ================= INNER SMALL HELMET (BRIGHT) ================= */
// function InnerHelmet() {
//   const ref = useRef();
//   const { mouse } = useThree();

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     if (!ref.current) return;

//     ref.current.rotation.y = t * 0.6 + mouse.x * 0.7;
//     ref.current.rotation.x = Math.sin(t * 0.4) * 0.25 + mouse.y * 0.5;

//     ref.current.position.y = Math.sin(t * 0.6) * 0.2;
//   });

//   return (
//     <mesh ref={ref} scale={1.2}>
//       <icosahedronGeometry args={[1, 1]} />
//       <MeshDistortMaterial
//         color="#38BDF8"
//         distort={0.35}
//         speed={2}
//         wireframe
//         emissive="#38BDF8"
//         emissiveIntensity={0.8}
//         metalness={0.9}
//         roughness={0}
//       />
//     </mesh>
//   );
// }

function InnerHelmet() {
  const ref = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!ref.current) return;

    // 🔁 SCALE PULSE (small → big → small)
    const pulse = 1 + Math.sin(t * 1.8) * 0.08; // speed & strength
    ref.current.scale.set(pulse, pulse, pulse);

    // rotation + mouse
    ref.current.rotation.y = t * 0.6 + mouse.x * 0.7;
    ref.current.rotation.x = Math.sin(t * 0.4) * 0.25 + mouse.y * 0.5;

    // subtle float
    ref.current.position.y = Math.sin(t * 0.6) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color="#38BDF8"
        wireframe
        distort={0.35}
        speed={2}
        emissive="#38BDF8"
        emissiveIntensity={0.1}
        metalness={0.9}
        roughness={0}
      />
    </mesh>
  );
}


/* ================= OUTER BIG HELMET (DARK SHELL) ================= */
// function OuterHelmet() {
//   const ref = useRef();

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     if (!ref.current) return;

//     ref.current.rotation.y = t * 0.08;
//     ref.current.rotation.x = Math.sin(t * 0.2) * 0.08;
//   });

//   return (
//     <mesh ref={ref} scale={4} position={[0, 0, -2]}>
//       <icosahedronGeometry args={[1, 3]} />
//       <meshStandardMaterial
//         color="#0B1220"              // dark blue-black
//         wireframe
//         transparent
//         opacity={0.22}
//         emissive="#0EA5E9"           // cyan glow
//         emissiveIntensity={0.35}
//       />
//     </mesh>
//   );
// }

function OuterHelmet() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!ref.current) return;

    // 🔁 SLOW SCALE BREATHING
    const pulse = 3.7 + Math.sin(t * 0.8) * 0.15;
    ref.current.scale.set(pulse, pulse, pulse);

    // cinematic rotation
    ref.current.rotation.y = t * 0.08;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.08;
  });

  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#0B1220"
        wireframe
        transparent
        opacity={0.17}
        emissive="#0EA5E9"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}


/* ================= MAIN ================= */
export default function TrojanHelmet() {
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none">
      <Canvas gl={{ alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 7]} />

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={1.5} color="#38BDF8" />
        <pointLight position={[-6, -6, -6]} intensity={0.6} color="#0EA5E9" />

        {/* Big shell */}
        <OuterHelmet />

        {/* Small core */}
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.6}>
          <InnerHelmet />
        </Float>
      </Canvas>
    </div>
  );
}
