import React from "react";
import Layout from "../components/layout";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import Map from "../components/canvas/map";
import "../styles/emergingtech.css"

function EmergingTech() {
    return(
        <Layout>
            <div className="vr-container">
                <h1>Welcome to the Emerging Tech Team!</h1>
                <Canvas>
                    <Suspense>
                        <Map scale={.01} />
                        <Environment preset="sunset" background />
                        <OrbitControls />
                    </Suspense>
                </Canvas>
            </div>
        </Layout>
    );
}

export default EmergingTech;