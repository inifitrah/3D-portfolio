import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("models/cardtrah2.glb");
useTexture.preload("images/bandgray.jpg");

function CardProfileMobileView() {
  return (
    <Canvas
      className="shadow-lg md:hidden"
      camera={{ position: [0, 0, 7], fov: 25 }}
      style={{ height: "500px" }}
    >
      <ambientLight intensity={Math.PI} />

      <Card />
      <Environment background blur={0.75}>
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  );
}

function Card() {
  const { nodes, materials } = useGLTF("models/cardtrah2.glb");
  return (
    <>
      <group scale={2.25} position={[0, -1.4, -0.05]}>
        <mesh geometry={nodes.card.geometry}>
          <meshPhysicalMaterial
            map={materials.base.map}
            map-anisotropy={16}
            clearcoat={1}
            clearcoatRoughness={0.15}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
        <mesh
          geometry={nodes.clip.geometry}
          material={materials.metal}
          material-roughness={0.3}
        />
        <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
      </group>
    </>
  );
}

export default CardProfileMobileView;
