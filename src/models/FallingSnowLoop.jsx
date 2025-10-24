import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import fallingSnowLoopScene from "../assets/3d/falling_snow_loop.glb";

// -------------------------------------------------------------
// Optimal Position/Scale for the Falling Snow Environment
//
// These values are estimated to work well with the Island and Plane
// positions defined in your Home component:
// Island Position: [0, -6.5, -43.4]
//
// The snow needs to be large enough to surround the island.
// -------------------------------------------------------------
const SNOW_SCALE = [50, 60, 50]; // Significantly larger scale
const SNOW_POSITION = [0, -35, 0];    // Centered, as the environment

export const FallingSnowLoop = ({ isRotating, ...props }) => {
    const group = useRef();
    const { scene, animations } = useGLTF(fallingSnowLoopScene);
    
    // 1. Animation Setup: Get the animation actions from the model
    const { actions } = useAnimations(animations, group);

    // 2. Play the Animation
    useEffect(() => {
        // Log available animations to confirm the name
        // console.log("Snow Animations:", actions); 

        // Assume the animation is named 'Animation' or 'Snow_Loop' 
        // You might need to check your model's exact animation name.
        const animationName = Object.keys(actions)[0]; 
        console.log(actions)
        if (animationName) {
            actions[animationName].play();
            actions[animationName].setEffectiveTimeScale(0.5); // Set speed if needed
            actions[animationName].loop = true; // Ensure it loops
        }

        // Cleanup function for when the component unmounts
        return () => {
            if (animationName && actions[animationName]) {
                 actions[animationName].stop();
            }
        };
    }, [actions]);

    // 3. Rotation Logic (Optional, only needed if the snow should rotate with the island)
    useFrame((_, delta) => {
        if (isRotating) {
            // Apply rotation around the Y-axis. 
            // The speed should match the Island's rotation logic for perfect alignment.
            group.current.rotation.y += 0.25 * delta; 
        }
    });

    return (
        <group ref={group} position={SNOW_POSITION} scale={SNOW_SCALE} {...props}>
            <primitive object={scene} />
        </group>
    );
};