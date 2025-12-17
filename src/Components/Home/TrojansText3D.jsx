import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, Float, Environment, Sparkles, useTexture } from "@react-three/drei";
import * as THREE from "three";
import goldTextureImg from "../../assets/trojan_gold.jpg";

// Using Droid Serif for a more "Trojan/Collegiate" look
const FONT_URL = "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/droid/droid_serif_bold.typeface.json";

function InteractiveText() {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    // Load the gold texture
    const goldTexture = useTexture(goldTextureImg);

    // Configure texture repeat/wrapping if necessary
    goldTexture.wrapS = goldTexture.wrapT = THREE.RepeatWrapping;
    goldTexture.repeat.set(1, 1);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Mouse interaction: Tilt the text based on mouse position
        const { x, y } = state.mouse;

        // Smooth interpolation for rotation
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.3, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.3, 0.1);
    });

    return (
        <group ref={meshRef}>
            <Center>
                <Text3D
                    font={FONT_URL}
                    size={1.5}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.03}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                    letterSpacing={0.2} // Increased spacing for width
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    TROJANS
                    <meshStandardMaterial
                        map={goldTexture}
                        color={hovered ? "#FFF8DC" : "#FFFFFF"} // Use white base so texture shows true colors, slight tint on hover
                        metalness={0.9}
                        roughness={0.2}
                        emissive="#B8860B" // Dark Golden Rod emissive
                        emissiveIntensity={0.2}
                    />
                </Text3D>
            </Center>
        </group>
    );
}

const TrojansText3D = () => {
    return (
        <div style={{ width: "100%", height: "300px", position: "relative", zIndex: 10 }}>
            {/* Increased height to avoid clipping */}
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true, antialias: true }}>
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1.5} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#FFD700" />

                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                    <InteractiveText />
                </Float>

                <Environment preset="sunset" />
                {/* Subtle extra sparkle for the text specifically */}
                <Sparkles count={40} scale={8} size={4} speed={0.4} opacity={0.5} color="#FFD700" />
            </Canvas>
        </div>
    );
};

export default TrojansText3D;
