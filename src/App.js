import {Canvas, useLoader} from '@react-three/fiber'
import {OrbitControls, Stars, PerspectiveCamera} from '@react-three/drei'
import './App.css';
import {Physics, usePlane, useBox, useCylinder, Debug} from '@react-three/cannon'
import { Suspense, useRef} from 'react';
import Bucket from './PolyBucket'
import Coin from './TrueCoin'
import Pillar from './Pillar';
import * as THREE from 'three'
import { TextureLoader } from 'three';



// function Coin() {
//   const [ref, api] = useCylinder(() => ({mass:1, position: [0, 3, 0], args: [0.5, 0.5, 0.1, 10]}))
//   return (
//     <mesh castShadow receiveShadow ref={ref} position={[0, 3, 0]} onClick={() => {api.velocity.set(0, 2, 0)}}>
//       <cylinderBufferGeometry attach='geometry' args={[0.5, 0.5, 0.1, 10]}/>
//       <meshLambertMaterial attach="material" color='orange'/>
//     </mesh>
//   )
// }



// function PillarBox() {
//   const [ref, api] = useBox(() => ({mass: 0, position: [0, 1, 0], args: [2.25, 7.55, 2.25]}))
//   return (
//     <mesh castShadow receiveShadow ref={ref} position={[0, 3, 0]} onClick={() => {api.velocity.set(0, 2, 0)}}>
//       <boxBufferGeometry attach='geometry' />
//       <meshLambertMaterial attach="material" transparent opacity={50} color='orange'/>
//     </mesh>
//   )
// }


// function Plane() {
//   const coinTexture1 = useLoader(TextureLoader, 'textures/Scene_-_Root_baseColor.png')
//   const coinTexture2 = useLoader(TextureLoader, 'textures/Scene_-_Root_metallicRoughness.png')
//   const coinTexture3 = useLoader(TextureLoader, 'textures/Scene_-_Root_normal.png')

//   coinTexture1.wrapS = coinTexture1.wrapT = THREE.RepeatWrapping
//   coinTexture1.repeat.set(10, 10)
//   coinTexture1.anisotropy = 16

//   const [ref] = usePlane(() => ({mass: 0, rotation: [-Math.PI / 2, 0, 0], position: [0, -2, 0]}))
//   return (
//     <mesh receiveShadow ref={ref} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//       <planeBufferGeometry attach='geometry' args={[100, 100]}/>
//       <meshLambertMaterial attach="material" map={coinTexture1} roughnessMap={coinTexture2} normalMap={coinTexture3}/>
//       {/* <meshLambertMaterial attachArray="material" map={coinTexture2}/> */}
//       {/* <meshLambertMaterial attachArray="material" map={coinTexture3}/> */}
//     </mesh>
//   )
// }

// function Wall() {
//   const [ref] = useBox(() => ({mass: 0, position: [1.35, 6, 0]}))
//   return (
//     <mesh receiveShadow ref={ref} >
//       <boxBufferGeometry attach='geometry' args={[0.2, 2, 0.75]}/>
//       <meshLambertMaterial attach="material" opacity={100}/>
//     </mesh>
//   )
// }

// function Wall1() {
//   const [ref] = useBox(() => ({mass: 0, position: [-1.35, 6, 0]}))
//   return (
//     <mesh receiveShadow ref={ref} >
//       <boxBufferGeometry attach='geometry' args={[0.2, 2, 0.75]}/>
//       <meshLambertMaterial attach="material" color='yellow'/>
//     </mesh>
//   )
// }
// function Wall2() {
//   const [ref] = useBox(() => ({mass: 0, position: [0, 6, -1.35], rotation: [0, Math.PI * 0.5, 0]}))
//   return (
//     <mesh receiveShadow ref={ref} >
//       <boxBufferGeometry attach='geometry' args={[0.2, 2, 0.75]}/>
//       <meshLambertMaterial attach="material" color='yellow'/>
//     </mesh>
//   )
// }

// function Wall3() {
//   const [ref] = useBox(() => ({mass: 0, position: [0, 6, 1.35], rotation: [0, Math.PI * 0.5, 0]}))
//   return (
//     <mesh receiveShadow ref={ref} >
//       <boxBufferGeometry attach='geometry' args={[0.2, 2, 0.75]}/>
//       <meshLambertMaterial attach="material" color='yellow'/>
//     </mesh>
//   )
// }

// function Coins() {
//   let manyCoins = []

//   for(let i = 0; i < 1000; i++) {
//     manyCoins.push(i)
//   }

//   return (manyCoins.map(x => <Coin key={x} position={[0, 5 + x, 0]}/> ))
// }

function Box(props) {
  const mesh = useRef()
  return (
    <mesh ref={mesh} {...props} > 
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial/>
    </mesh>
   
  )
}


function App(props) {
  return (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} color={'red'} />
    <Box position={[-1.2, 0, 0]} />
  </Canvas>
  )
}


// function App() {
//   return (
//     <div>
//       <Canvas shadowMap camera={{position: [0, 10, 8],far: 500, fov: 85}}>
//         <OrbitControls/>
//         <ambientLight intesity={0.5}/>
//         <spotLight position={[5, 1, 10]} angle={0.3} />
//         <directionalLight
//           intensity={0.1}
//           position={[0,3,0]}
//           castShadow
//           shadow-mapSize-height={512}
//           shadow-mapSize-width={512}
//         />
// {/*          
//         <Physics contactEquationStiffness={100} contactEquationRelaxation={5}>
//           <Debug>
//             <Wall/>
//             <Wall1/>
//             <Wall2/>
//             <Wall3/>
//             <PillarBox/>
//             <Pillar position={[0, -5.5, 0]} scale={[5, 5, 5]}/>
//             <Bucket position={[0, 5.5, 0]} scale={[7, 7, 7]}/>
//             {/* <Coin position={[0, 7, 0]}/>     */}
//             {/* <Coins/> */}
//             {/* {manyCoins.map(x => <Coin position={[Math.floor(Math.random() * 5), Math.floor(Math.random() * (20) + 3), Math.floor(Math.random() * 5)]}/>)} */}
//             {/* <Plane/>
//           </Debug>
//         </Physics> */} 
//       </Canvas>
     
//     </div>
//   )
// }

export default App;
