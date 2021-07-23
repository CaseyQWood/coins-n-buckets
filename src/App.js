import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei'
import './App.css';
import { AmbientLight } from 'three';
import {Physics, useBox, usePlane, useCylinder} from '@react-three/cannon'

function Coin() {
  const [ref, api] = useCylinder(() => ({mass:1, position: [0, 2, 0], args: [0.5, 0.5, 0.1, 32]}))
  return (
    <mesh ref={ref} position={[0, 2, 0]} onClick={() => {api.velocity.set(0, 2, 0)}}>
      <cylinderBufferGeometry attach='geometry' args={[0.5, 0.5, 0.1, 32]}/>
      <meshLambertMaterial attach="material" color='orange'/>
    </mesh>
  )
}

function Plane() {
  const [ref] = usePlane(() => ({mass: 0, rotation: [-Math.PI / 2, 0, 0], position: [0, -2, 0]}))
  return (
    <mesh red={ref} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]}/>
      <meshLambertMaterial attach="material" color='lightblue'/>
    </mesh>
  )
}


function App() {
  return (
    <div>
      <Canvas>
        <OrbitControls/>
        <ambientLight intesity={0.5}/>
        <spotLight position={[10, 15, 10]} angle={0.3} />
        {/* <Stars/> */}
        <Physics>
        <Coin/>
        <Coin/>
        <Coin/>
          <Coin/>
          <Plane/>
        </Physics>
      </Canvas>
     
    </div>
  )
}

export default App;
