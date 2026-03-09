/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useIslandRotation } from "../hooks/useIslandRotation";

// @ts-ignore
import islandScene from "../assets/3d/island.glb";
import type { Mesh, MeshStandardMaterial } from "three";
import type { GLTF } from "three-stdlib";

interface IslandProps {
  isRotating: boolean;
  setIsRotating: (isRotating: boolean) => void;
  setCurrentStage: (stage: number | null) => void;
  currentFocusPoint?: any;
  [key: string]: any;
}

type GLTFResult = GLTF & {
  nodes: {
    polySurface944_tree_body_0: Mesh;
    polySurface945_tree1_0: Mesh;
    polySurface946_tree2_0: Mesh;
    polySurface947_tree1_0: Mesh;
    polySurface948_tree_body_0: Mesh;
    polySurface949_tree_body_0: Mesh;
    pCube11_rocks1_0: Mesh;
  };
  materials: {
    PaletteMaterial001: MeshStandardMaterial;
  };
};

export const Island: React.FC<IslandProps> = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) => {
  const { nodes, materials } = useGLTF(islandScene) as GLTFResult;
  const islandRef = useIslandRotation({
    isRotating,
    setIsRotating,
    setCurrentStage,
  });

  return (
    // {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}