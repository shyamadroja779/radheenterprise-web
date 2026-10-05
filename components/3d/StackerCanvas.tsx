"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { Rotate3d, Check } from "lucide-react";
import * as THREE from "three";

// 3D Stacker component that animates parts based on the lift height prop (0 to 1)
function StackerModel({ lift }: { lift: number }) {
  const carriageRef = useRef<THREE.Group>(null);
  const pistonRef = useRef<THREE.Mesh>(null);

  // Animate forks and piston height smoothly
  useFrame(() => {
    if (carriageRef.current) {
      // Forks lift range: y = 0 to y = 2.2
      carriageRef.current.position.y = THREE.MathUtils.lerp(
        carriageRef.current.position.y,
        lift * 2.2,
        0.1
      );
    }
    if (pistonRef.current) {
      // Hydraulic cylinder piston lift range: scale y based on lift, moving up
      const targetScaleY = 0.4 + lift * 1.8;
      pistonRef.current.scale.y = THREE.MathUtils.lerp(
        pistonRef.current.scale.y,
        targetScaleY,
        0.1
      );
      pistonRef.current.position.y = THREE.MathUtils.lerp(
        pistonRef.current.position.y,
        -0.4 + (lift * 2.2) / 2,
        0.1
      );
    }
  });

  // Materials definition
  const yellowPaint = new THREE.MeshStandardMaterial({
    color: "#F5A623",
    metalness: 0.8,
    roughness: 0.2,
  });

  const steelMaterial = new THREE.MeshStandardMaterial({
    color: "#4A5568",
    metalness: 0.9,
    roughness: 0.2,
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: "#E2E8F0",
    metalness: 0.95,
    roughness: 0.05,
  });

  const rubberMaterial = new THREE.MeshStandardMaterial({
    color: "#1A202C",
    metalness: 0.1,
    roughness: 0.8,
  });

  const gridMaterial = new THREE.MeshStandardMaterial({
    color: "#2D3748",
    metalness: 0.7,
    roughness: 0.3,
    wireframe: true,
  });

  return (
    <group position={[0, -0.6, 0]}>
      {/* 1. CHASSIS / BASE */}
      {/* Heavy rear motor cabinet */}
      <mesh position={[0, 0.1, -0.5]} material={yellowPaint} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.6, 0.6]} />
      </mesh>
      {/* Front legs extending forward */}
      <mesh position={[-0.32, -0.1, 0.3]} material={yellowPaint} castShadow receiveShadow>
        <boxGeometry args={[0.15, 0.15, 1.2]} />
      </mesh>
      <mesh position={[0.32, -0.1, 0.3]} material={yellowPaint} castShadow receiveShadow>
        <boxGeometry args={[0.15, 0.15, 1.2]} />
      </mesh>
      {/* Battery indicator details on cabinet */}
      <mesh position={[0, 0.35, -0.5]} material={steelMaterial}>
        <boxGeometry args={[0.6, 0.1, 0.4]} />
      </mesh>
      {/* Control handle steer assembly */}
      <group position={[0, 0.4, -0.7]}>
        <mesh material={steelMaterial} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.8]} />
        </mesh>
        <mesh position={[0, 0.4, 0]} rotation={[Math.PI / 2, 0, 0]} material={rubberMaterial} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.3]} />
        </mesh>
      </group>

      {/* 2. WHEELS */}
      {/* Front load rollers */}
      <mesh position={[-0.32, -0.16, 0.8]} rotation={[0, 0, Math.PI / 2]} material={rubberMaterial} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.12]} />
      </mesh>
      <mesh position={[0.32, -0.16, 0.8]} rotation={[0, 0, Math.PI / 2]} material={rubberMaterial} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.12]} />
      </mesh>
      {/* Rear steer drive wheels */}
      <mesh position={[-0.25, -0.16, -0.5]} rotation={[0, 0, Math.PI / 2]} material={rubberMaterial} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.15]} />
      </mesh>
      <mesh position={[0.25, -0.16, -0.5]} rotation={[0, 0, Math.PI / 2]} material={rubberMaterial} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.15]} />
      </mesh>

      {/* 3. MAST (Vertical Steel Channels) */}
      {/* Left Mast Rail */}
      <mesh position={[-0.28, 1.1, 0.0]} material={steelMaterial} castShadow receiveShadow>
        <boxGeometry args={[0.08, 2.5, 0.12]} />
      </mesh>
      {/* Right Mast Rail */}
      <mesh position={[0.28, 1.1, 0.0]} material={steelMaterial} castShadow receiveShadow>
        <boxGeometry args={[0.08, 2.5, 0.12]} />
      </mesh>
      {/* Top Crossbar */}
      <mesh position={[0, 2.3, 0.0]} material={steelMaterial} castShadow>
        <boxGeometry args={[0.64, 0.08, 0.1]} />
      </mesh>

      {/* 4. HYDRAULIC CYLINDER */}
      {/* Outer Cylinder Cylinder */}
      <mesh position={[0, 0.5, -0.08]} material={steelMaterial} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.3]} />
      </mesh>
      {/* Inner Chrome Piston (scales and moves up) */}
      <mesh ref={pistonRef} position={[0, -0.4, -0.08]} material={chromeMaterial} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 1.0]} />
      </mesh>

      {/* 5. CARRIAGE & FORKS (Slides up and down) */}
      <group ref={carriageRef} position={[0, 0, 0.06]}>
        {/* Carriage frame plate */}
        <mesh position={[0, 0.25, 0.0]} material={steelMaterial} castShadow>
          <boxGeometry args={[0.56, 0.5, 0.05]} />
        </mesh>
        
        {/* Safety Guard Mesh */}
        <mesh position={[0, 0.75, -0.02]} material={gridMaterial} castShadow>
          <boxGeometry args={[0.56, 0.6, 0.02]} />
        </mesh>

        {/* Fork Prongs */}
        {/* Left Prong */}
        <group position={[-0.18, 0.12, 0.0]}>
          {/* Vertical shank */}
          <mesh position={[0, 0.1, 0.04]} material={steelMaterial} castShadow>
            <boxGeometry args={[0.1, 0.4, 0.04]} />
          </mesh>
          {/* Horizontal blade */}
          <mesh position={[0, -0.1, 0.5]} material={steelMaterial} castShadow receiveShadow>
            <boxGeometry args={[0.1, 0.04, 1.0]} />
          </mesh>
          {/* Tapered tip */}
          <mesh position={[0, -0.1, 1.025]} rotation={[0.04, 0, 0]} material={steelMaterial} castShadow>
            <boxGeometry args={[0.1, 0.036, 0.05]} />
          </mesh>
        </group>

        {/* Right Prong */}
        <group position={[0.18, 0.12, 0.0]}>
          {/* Vertical shank */}
          <mesh position={[0, 0.1, 0.04]} material={steelMaterial} castShadow>
            <boxGeometry args={[0.1, 0.4, 0.04]} />
          </mesh>
          {/* Horizontal blade */}
          <mesh position={[0, -0.1, 0.5]} material={steelMaterial} castShadow receiveShadow>
            <boxGeometry args={[0.1, 0.04, 1.0]} />
          </mesh>
          {/* Tapered tip */}
          <mesh position={[0, -0.1, 1.025]} rotation={[0.04, 0, 0]} material={steelMaterial} castShadow>
            <boxGeometry args={[0.1, 0.036, 0.05]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

// Particle field to simulate industrial ambiance
function FloatingParticles({ count = 50 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 6;
      const y = Math.random() * 4 - 1;
      const z = (Math.random() - 0.5) * 6;
      const speed = 0.1 + Math.random() * 0.2;
      temp.push({ x, y, z, speed });
    }
    return temp;
  }, [count]);

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = p.z;
    });
    return pos;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posArr = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      // Gently drift vertically
      posArr[i * 3 + 1] += Math.sin(time + i) * 0.002;
      // Gently sway horizontally
      posArr[i * 3] += Math.cos(time + i) * 0.001;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#F5A623"
        size={0.04}
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function StackerCanvas({ liftHeight }: { liftHeight: number }) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchOrbitActive, setTouchOrbitActive] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[320px] md:h-[480px] flex flex-col items-center justify-center bg-[#0B0E14] border border-[#161B22] rounded-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,166,35,0.08),transparent_70%)] pointer-events-none" />
        <div className="w-12 h-12 border-4 border-primary-yellow/20 border-t-primary-yellow rounded-full animate-spin mb-4" />
        <p className="text-muted-gray text-sm font-mono tracking-wider">LOADING 3D ENGINE...</p>
      </div>
    );
  }

  return (
    <div className={`w-full h-[320px] md:h-[480px] bg-[#0B0E14] border border-[#161B22] rounded-xl relative overflow-hidden group shadow-2xl ${isMobile && !touchOrbitActive ? "touch-pan-y" : ""}`}>
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(22,27,34,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(22,27,34,0.35)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,166,35,0.05),transparent_80%)] pointer-events-none" />
      
      {/* 3D Canvas */}
      <div className={`w-full h-full ${isMobile && !touchOrbitActive ? "pointer-events-none" : "pointer-events-auto"}`}>
        <Canvas
          camera={{ position: [2.5, 1.8, 3.2], fov: 45 }}
          shadows
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-5, 5, -5]} intensity={0.3} />
          <pointLight position={[0, 4, 2]} intensity={0.5} color="#F5A623" />
          
          {/* Animated Stacker Model */}
          <StackerModel lift={liftHeight} />
          
          {/* Floating dust/industrial spark particles */}
          <FloatingParticles count={60} />
          
          {/* Contact shadow below stacker */}
          <ContactShadows
            position={[0, -0.75, 0]}
            opacity={0.65}
            scale={5}
            blur={1.5}
            far={2.5}
          />
          
          {/* Lighting reflections */}
          <Environment preset="warehouse" />
          
          {/* Interaction Controls */}
          <OrbitControls
            enableZoom={!isMobile}
            enablePan={!isMobile}
            minDistance={1.8}
            maxDistance={6.0}
            maxPolarAngle={Math.PI / 2 + 0.05} // Don't orbit below ground level
          />
        </Canvas>
      </div>

      {/* Floating UI Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-1 font-mono text-[10px] pointer-events-none z-10">
        <div className="bg-[#161B22]/90 border border-primary-yellow/20 px-2 py-1 rounded text-primary-yellow flex items-center gap-1.5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          SYSTEM: ACTIVE
        </div>
        <div className="bg-[#161B22]/90 border border-gray-800 px-2 py-1 rounded text-muted-gray backdrop-blur-sm">
          RENDER: R3F_GL_V2
        </div>
      </div>

      {/* Mobile Touch Orbit Action Bar */}
      {isMobile && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          {!touchOrbitActive ? (
            <button
              type="button"
              onClick={() => setTouchOrbitActive(true)}
              className="bg-[#161B22]/95 border border-primary-yellow/60 text-primary-yellow px-4 py-1.5 rounded-full text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-2xl backdrop-blur-md active:scale-95 transition-all cursor-pointer"
            >
              <Rotate3d className="w-3.5 h-3.5" />
              <span>Tap to Rotate 3D</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setTouchOrbitActive(false)}
              className="bg-primary-yellow text-dark-bg px-4 py-1.5 rounded-full text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-2xl active:scale-95 transition-all cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Done (Unlock Scroll)</span>
            </button>
          )}
        </div>
      )}

      {/* Desktop Orbit Indicator */}
      <div className="hidden md:block absolute bottom-4 right-4 text-right font-mono text-[10px] text-muted-gray pointer-events-none z-10">
        <div>LIFT: {(liftHeight * 100).toFixed(0)}%</div>
        <div>ROTATION: DRAG TO SPIN</div>
      </div>
    </div>
  );
}
