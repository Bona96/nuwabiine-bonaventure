import { useEffect, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import * as THREE from "three";

import birdScene from "../assets/3d/bird.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export const Bird = () => {
  const birdRef = useRef<THREE.Mesh>(null);
  const birdTwoRef = useRef<THREE.Mesh>(null);

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // **CRITICAL:** Use useMemo to create a clone of the scene for the second bird.
  // In React-Three-Fiber, you cannot use the same object instance for multiple primitives.
  const secondBirdScene = useMemo(() => scene.clone(), [scene]);

  // Get access to the animations for the first bird
  const { actions } = useAnimations(animations, birdRef);

  // Get access to the animations for the second bird (needs its own useAnimations)
  const { actions: actionsTwo } = useAnimations(animations, birdTwoRef);

  // Play the "Take 001" animation when the component mounts
  useEffect(() => {
    actions["Take 001"]?.play();
    actionsTwo["Take 001"]?.play();
  }, [actions, actionsTwo]);

  useFrame(({ clock, camera }) => {
    if (!birdRef.current || !birdTwoRef.current) return;

    const elapsedTime = clock.elapsedTime;

    // --- Bird One Movement ---
    birdRef.current.position.y = Math.sin(elapsedTime) * 0.2 + 2;

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }

    // --- Bird Two Movement (Offset from Bird One) ---
    birdTwoRef.current.position.y = Math.sin(elapsedTime + Math.PI) * 0.2 + 2.5;

    if (birdTwoRef.current.position.x > camera.position.x + 12) {
      birdTwoRef.current.rotation.y = Math.PI;
    } else if (birdTwoRef.current.position.x < camera.position.x - 8) {
      birdTwoRef.current.rotation.y = 0;
    }

    if (birdTwoRef.current.rotation.y === 0) {
      birdTwoRef.current.position.x += 0.012;
      birdTwoRef.current.position.z -= 0.008;
    } else {
      birdTwoRef.current.position.x -= 0.008;
      birdTwoRef.current.position.z += 0.012;
    }
  });

  return (
    <a.group>
      {/* First Bird */}
      <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
        <primitive object={scene} />
      </mesh>

      {/* Second Bird */}
      <mesh ref={birdTwoRef} position={[-7, 2.5, 3]} scale={[0.002, 0.002, 0.002]}>
        <primitive object={secondBirdScene} />
      </mesh>
    </a.group>
  );
};