import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { OrbitControls } from "@react-three/drei";
import Interface from "./components/Interface";
import GridHelper from "./components/GridHelper";

function App() {
  return (
    // <h1>TEST</h1>
    <>
      <Canvas>
        <OrbitControls />
        <Experience />
      </Canvas>
      <Interface />
      <GridHelper cols={12} gap={25} inset={25} />
    </>
  );
}

export default App;
