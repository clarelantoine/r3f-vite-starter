import { Box } from "@react-three/drei";

export default function Cube() {
  return (
    <Box args={[1, 1, 1]}>
      <meshNormalMaterial />
    </Box>
  );
}
