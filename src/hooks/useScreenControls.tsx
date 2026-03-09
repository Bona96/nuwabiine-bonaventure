import type { Vector3 } from "@react-three/fiber";
import {useMemo} from "react";



// --- Custom Hooks for Logic Separation ---

export const useScreenAdjustments = () => {
  const adjustBiplaneForScreenSize = (): [Vector3, Vector3] => {
    let screenScale: Vector3, screenPosition: Vector3;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -3, -4];
    }
    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = (): [Vector3, Vector3] => {
    let screenScale: Vector3, screenPosition: Vector3;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -7, -45];
    }
    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = useMemo(
    () => adjustBiplaneForScreenSize(),
    []
  );
  const [islandScale, islandPosition] = useMemo(
    () => adjustIslandForScreenSize(),
    []
  );

  return { biplaneScale, biplanePosition, islandScale, islandPosition };
};

export const useSceneLighting = (isDark: boolean) => {
  return useMemo(() => {
    if (isDark) {
      return {
        ambientIntensity: 0.1,
        directionalPosition: [1, 5, 1] as Vector3,
        directionalIntensity: 0.8,
        directionalColor: "#a0a8ff",
        pointPosition: [10, 5, 10] as Vector3,
        pointIntensity: 0.1,
        hemisphereSky: "#1a202c",
        hemisphereGround: "#3b4252",
        hemisphereIntensity: 0.5,
        spotLightIntensity: 0.2,
      };
    } else {
      return {
        ambientIntensity: 0.5,
        directionalPosition: [1, 1, 1] as Vector3,
        directionalIntensity: 2,
        directionalColor: "#ffffff",
        pointPosition: [10, 5, 10] as Vector3,
        pointIntensity: 2,
        hemisphereSky: "#b1e1ff",
        hemisphereGround: "#000000",
        hemisphereIntensity: 1,
        spotLightIntensity: 2,
      };
    }
  }, [isDark]);
};
