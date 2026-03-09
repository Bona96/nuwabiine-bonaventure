import React, {
  Suspense,
  useEffect,
  useState,
} from "react";
import { Canvas } from "@react-three/fiber";
import { HomeInfo, Loader } from "../components";
import { Bird, FallingSnowLoop, Island, Plane, Sky } from "../models";
import { useDarkMode } from "../context/DarkModeContext";
import { useSceneLighting, useScreenAdjustments } from "../hooks/useScreenControls";
import type { HomeType } from "../lib/types";

const Home: React.FC<HomeType> = ({ isHome, setIsHome }) => {
  const { isDark } = useDarkMode();
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    if (!isHome) setIsHome(true);
  }, [isHome, setIsHome]);

  const lighting = useSceneLighting(isDark);
  const { biplaneScale, biplanePosition, islandScale, islandPosition } = useScreenAdjustments();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-48 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* 3D Section */}
      <Canvas
        className={`bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            position={lighting.directionalPosition}
            intensity={lighting.directionalIntensity}
            color={lighting.directionalColor}
          />

          <ambientLight intensity={lighting.ambientIntensity} />

          <pointLight
            position={lighting.pointPosition}
            intensity={lighting.pointIntensity}
          />

          <hemisphereLight
            color={lighting.hemisphereSky}
            groundColor={lighting.hemisphereGround}
            intensity={lighting.hemisphereIntensity}
          />

          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={lighting.spotLightIntensity}
          />
          
          <Bird />
          
          {isDark ? (
            <FallingSnowLoop isRotating={isRotating} />
          ) : (
            <Sky isRotating={isRotating} />
          )}
          
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