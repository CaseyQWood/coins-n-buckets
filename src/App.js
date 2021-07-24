import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei'
import './App.css';
import { AmbientLight } from 'three';
import {Physics, usePlane, useCylinder, Debug} from '@react-three/cannon'
import { Suspense} from 'react';
import Bucket from './Bucket'



function Coin() {
  const [ref, api] = useCylinder(() => ({mass:1, position: [0, 3, 0], args: [0.5, 0.5, 0.1, 10]}))
  return (
    <mesh castShadow receiveShadow ref={ref} position={[0, 3, 0]} onClick={() => {api.velocity.set(0, 2, 0)}}>
      <cylinderBufferGeometry attach='geometry' args={[0.5, 0.5, 0.1, 10]}/>
      <meshLambertMaterial attach="material" color='orange'/>
    </mesh>
  )
}


function Plane() {
  const [ref] = usePlane(() => ({mass: 0, rotation: [-Math.PI / 2, 0, 0], position: [0, -2, 0]}))
  return (
    <mesh receiveShadow ref={ref} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]}/>
      <meshLambertMaterial attach="material" color='lightblue'/>
    </mesh>
  )
}

function Edges() {
  const [ref] = useCylinder(() => ({mass: 0, rotation: [0, 0, 0], position: [0, 1, 0]}))
  return (
    <mesh receiveShadow ref={ref} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[1, 1, 1, 10, 10, true]}/>
      <meshLambertMaterial attach="material" color='red'/>
    </mesh>
  )
}


function App() {
  return (
    <div>
      <Canvas shadowMap>
        <OrbitControls/>
        <ambientLight intesity={0.5}/>
        <spotLight position={[5, 1, 10]} angle={0.3} />
        <directionalLight
          intensity={0.5}
          position={[0,10,0]}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <Stars/>
        <Suspense fallback={null}>
          
        </Suspense>
         
        <Physics>
          <Debug>
            <Edges/>
            <Bucket position={[0, -0.8, 0]} scale={[0.07, 0.07, 0.07]}/>
            <Coin/>
            <Coin />
            <Plane/>
          </Debug>
        </Physics>
      </Canvas>
     
    </div>
  )
}

export default App;
