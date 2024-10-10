import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/models/man.glb'); // Add your model path here
  return <primitive object={scene} rotation={[0, 60, 0]} />;
};



export const TestDModel = () => {
  return (
    <div className='lg:w-1/3 border-2 w-full relative mt-5 lg:mt-[75px] border-[#b3b3b3] rounded-[10px]'>
        <Canvas style={{ height: 360, width: "100%" }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <PerspectiveCamera makeDefault position={[0, 0, 2.5, 90]} />
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <div className='font-a1 text-[#9b9b9b] text-[13px] w-full text-center absolute bottom-3'>satelite.obj</div>
    </div>
  );
};