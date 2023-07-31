import React from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useStateContext } from "@/context/stateContext";

const Shirt = () => {
  const { logoDecal, fullDecal, isFullTexture, isLogoTexture, color } =
    useStateContext();
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(logoDecal);
  const fullTexture = useTexture(fullDecal);

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, color, 0.25, delta)
  );

  return (
    <group key={"shirt"}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
