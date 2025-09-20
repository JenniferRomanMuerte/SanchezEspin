import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";

const texturePaths = [
  "/tech/html5.png",
  "/tech/css.png",
  "/tech/JavaScript.png",
  "/tech/React.png",
  "/tech/Java.png",
  "/tech/SQL.png",
];

interface TechCubeProps {
  size?: number; // tamaño del cubo (lado)
  canvasSize?: number; // tamaño en píxeles del canvas (ancho/alto)
  onReady?: () => void;
}

function LogoCube({
  size = 2.5,
  onReady,
}: {
  size: number;
  onReady?: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const textures = useLoader(THREE.TextureLoader, texturePaths);

  useEffect(() => {
    if (textures && onReady) {
      onReady(); // ✅ avisa cuando las texturas están listas
    }
  }, [textures, onReady]);

  useFrame(() => {
    groupRef.current.rotation.y += 0.01;
    groupRef.current.rotation.x += 0.005;
  });

  const offset = size / 2 + 0.01;

  const positions = [
    [0, 0, offset],
    [0, 0, -offset],
    [offset, 0, 0],
    [-offset, 0, 0],
    [0, offset, 0],
    [0, -offset, 0],
  ];

  const rotations = [
    [0, 0, 0],
    [0, Math.PI, 0],
    [0, -Math.PI / 2, 0],
    [0, Math.PI / 2, 0],
    [-Math.PI / 2, 0, 0],
    [Math.PI / 2, 0, 0],
  ];

  return (
    <group ref={groupRef}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.1} />
        <Edges threshold={15} color="#adadad" />
      </mesh>

      {textures.map((texture, i) => (
        <mesh
          key={i}
          position={positions[i] as [number, number, number]}
          rotation={rotations[i] as [number, number, number]}
          receiveShadow
        >
          <planeGeometry args={[size * 0.96, size * 0.96]} />
          <meshBasicMaterial
            map={texture}
            transparent
            alphaTest={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function TechCube({
  size = 2.5,
  canvasSize = 400,
  onReady,
}: TechCubeProps) {
  return (
    <div style={{ width: canvasSize, height: canvasSize }}>
      <Canvas camera={{ position: [5, 5, 5] }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <LogoCube size={size} onReady={onReady} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
