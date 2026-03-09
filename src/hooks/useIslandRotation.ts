import { useRef, useEffect, useCallback } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Group } from "three";

interface UseIslandRotationProps {
  isRotating: boolean;
  setIsRotating: (isRotating: boolean) => void;
  setCurrentStage: (stage: number | null) => void;
}

export const useIslandRotation = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
}: UseIslandRotationProps) => {
  const islandRef = useRef<Group>(null);
  const { gl, viewport } = useThree();

  // Use a ref for the last mouse x position
  const lastX = useRef(0);
  // Use a ref for rotation speed
  const rotationSpeed = useRef(0);
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95;

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = useCallback(
    (event: PointerEvent | TouchEvent) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(true);

      // Calculate the clientX based on whether it's a touch event or a mouse event
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;

      // Store the current clientX position for reference
      lastX.current = clientX;
    },
    [setIsRotating]
  );

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = useCallback(
    (event: PointerEvent | TouchEvent) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(false);
    },
    [setIsRotating]
  );

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = useCallback(
    (event: PointerEvent | TouchEvent) => {
      event.stopPropagation();
      event.preventDefault();
      if (isRotating && islandRef.current) {
        // If rotation is enabled, calculate the change in clientX position
        const clientX =
          "touches" in event ? event.touches[0].clientX : event.clientX;

        // calculate the change in the horizontal position of the mouse cursor or touch input,
        // relative to the viewport's width
        const delta = (clientX - lastX.current) / viewport.width;

        // Update the island's rotation based on the mouse/touch movement
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;

        // Update the reference for the last clientX position
        lastX.current = clientX;

        // Update the rotation speed
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    },
    [isRotating, viewport.width]
  );

  // Handle keydown events
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!islandRef.current) return;

      if (event.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);

        islandRef.current.rotation.y += 0.005 * Math.PI;
        rotationSpeed.current = 0.007;
      } else if (event.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);

        islandRef.current.rotation.y -= 0.005 * Math.PI;
        rotationSpeed.current = -0.007;
      }
    },
    [isRotating, setIsRotating]
  );

  // Handle keyup events
  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsRotating(false);
      }
    },
    [setIsRotating]
  );

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handlePointerDown);
    canvas.addEventListener("touchend", handlePointerUp);
    canvas.addEventListener("touchmove", handlePointerMove);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handlePointerDown);
      canvas.removeEventListener("touchend", handlePointerUp);
      canvas.removeEventListener("touchmove", handlePointerMove);
    };
  }, [
    gl,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyDown,
    handleKeyUp,
  ]);

  // This function is called on each frame update
  useFrame(() => {
    if (!islandRef.current) return;

    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return islandRef;
};