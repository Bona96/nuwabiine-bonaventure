import { useEffect, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

import birdScene from "../assets/3d/bird.glb";
import birdScene2 from "../assets/3d/bird2.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export const Bird = () => {
  const birdRef = useRef();
  const birdTwoRef = useRef();

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
    actions["Take 001"].play();
    actionsTwo["Take 001"].play(); // Play animation for the second bird
  }, [actions, actionsTwo]);

  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.elapsedTime;

    // --- Bird One Movement ---
    // Simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }

    // --- Bird Two Movement (Offset from Bird One) ---
    // Offset the sine wave by Math.PI for an out-of-sync flapping motion
    birdTwoRef.current.position.y = Math.sin(elapsedTime + Math.PI) * 0.2 + 2.5; // Slightly higher

    // Independent Boundary Check and Movement Logic for Bird Two
    if (birdTwoRef.current.position.x > camera.position.x + 12) { // Wider boundary
      birdTwoRef.current.rotation.y = Math.PI;
    } else if (birdTwoRef.current.position.x < camera.position.x - 8) { // Smaller backward boundary
      birdTwoRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction (slightly faster/slower)
    if (birdTwoRef.current.rotation.y === 0) {
      // Moving forward a bit faster
      birdTwoRef.current.position.x += 0.012;
      birdTwoRef.current.position.z -= 0.008; // Slightly different Z-movement
    } else {
      // Moving backward a bit slower
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

      {/* Second Bird - **USES birdTwoRef and the CLONED SCENE** */}
      <mesh ref={birdTwoRef} position={[-7, 2.5, 3]} scale={[0.002, 0.002, 0.002]}> {/* Slightly larger and different starting position */}
        <primitive object={secondBirdScene} />
      </mesh>
    </a.group>
  );
};