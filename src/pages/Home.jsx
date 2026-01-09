import {
  Suspense,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { Canvas } from "@react-three/fiber";
import { HomeInfo, Loader } from "../components/";
import { Bird, FallingSnowLoop, Island, Plane, Sky } from "../models";
import { useDarkMode } from "../context/DarkModeContext";

const Home = ({ isHome, setIsHome }) => {
  const { isDark } = useDarkMode();
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  if (!isHome) setIsHome(true);
  // --- Efficiency: Use useCallback for stable function references ---
  const adjustBiplaneForScreenSize = useCallback(() => {
    let screenScale, screenPosition;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  }, []); // Empty dependency array means it's created once

  const adjustIslandForScreenSize = useCallback(() => {
    let screenScale, screenPosition;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = isDark ? [0, -6.5, -43.4] : [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = isDark ? [0, -6.5, -43.4] : [0, -6.5, -43.4];
    }
    return [screenScale, screenPosition];
  }, []); // Empty dependency array means it's created once
  // -----------------------------------------------------------------

  // --- NEW: Lighting Configuration based on Dark Mode ---
  const lighting = useMemo(() => {
    if (isDark) {
      // NIGHT MODE / DARK MODE CONFIG
      return {
        ambientIntensity: 0.1, // Much lower ambient light
        directionalPosition: [1, 5, 1],
        directionalIntensity: 0.8, // Reduced intensity (Moonlight)
        directionalColor: "#a0a8ff", // Cool blue for moonlight

        pointPosition: [10, 5, 10],
        pointIntensity: 0.1, // Point lights are almost off unless they represent a glow

        hemisphereSky: "#1a202c", // Dark blue sky
        hemisphereGround: "#3b4252", // Darker ground
        hemisphereIntensity: 0.5, // Reduced hemisphere light
      };
    } else {
      // DAY MODE / LIGHT MODE CONFIG (Your original settings)
      return {
        ambientIntensity: 0.5,
        directionalPosition: [1, 1, 1],
        directionalIntensity: 2,
        directionalColor: "#ffffff", // White for sunlight

        pointPosition: [10, 5, 10],
        pointIntensity: 2,

        hemisphereSky: "#b1e1ff", // Light blue sky
        hemisphereGround: "#000000", // Black ground
        hemisphereIntensity: 1,
      };
    }
  }, [isDark]);
  // -----------------------------------------------------------------

  // --- Efficiency: Use useMemo to calculate values only once or when dependencies change (though dependencies are static here) ---
  const [biplaneScale, biplanePosition] = useMemo(
    () => adjustBiplaneForScreenSize(),
    [adjustBiplaneForScreenSize]
  );
  const [islandScale, islandPosition] = useMemo(
    () => adjustIslandForScreenSize(),
    [adjustIslandForScreenSize]
  );
  // -----------------------------------------------------------------

  // --- Dark Mode Enhancement: Adjust hemisphere light colors based on theme ---
  // A light sky/dark ground for a day scene. A darker sky/ground for a night scene.
  const hemisphereLightProps = useMemo(
    () => ({
      skyColor: isDark ? "#1a202c" : "#b1e1ff", // Darker sky for night
      groundColor: isDark ? "#3b4252" : "#000000", // Darker ground for night
      intensity: isDark ? 0.75 : 1, // Slightly less intense light for night
    }),
    [isDark]
  );
  // -----------------------------------------------------------------

  return (
    <section className="-mt-10 w-full h-screen relative">
      <div className="absolute top-48 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* 3D Section */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Main Lights */}
          {/* DIRECTIONAL LIGHT (Sun/Moon) */}
          <directionalLight
            position={lighting.directionalPosition}
            intensity={lighting.directionalIntensity}
            color={lighting.directionalColor} // New: Dynamic Color
          />

          {/* AMBIENT LIGHT (General Fill Light) */}
          <ambientLight intensity={lighting.ambientIntensity} />

          {/* POINT LIGHT (Localized Glow) */}
          <pointLight
            position={lighting.pointPosition}
            intensity={lighting.pointIntensity}
          />

          {/* HEMISPHERE LIGHT (Sky and Ground color influence) */}
          <hemisphereLight
            skyColor={lighting.hemisphereSky}
            groundColor={lighting.hemisphereGround}
            intensity={lighting.hemisphereIntensity}
          />

          {/* SPOT LIGHT - Often overkill for simple scenes, consider removing 
              or setting to a low intensity in dark mode, e.g., intensity: 0.5 * (isDark ? 0.1 : 1)
          */}
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={isDark ? 0.2 : 2} // Dramatically reduced intensity for night
          />
          {/* Bird starts */}
          <Bird />
          {/* Dynamic Sky/Environment Model based on Dark Mode */}
          {
            isDark ? (
              <FallingSnowLoop isRotating={isRotating} /> // Night/Dark environment
            ) : (
              <Sky isRotating={isRotating} />
            ) // Day/Light environment
          }
          {/* 3D Models with responsive adjustments */}
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
