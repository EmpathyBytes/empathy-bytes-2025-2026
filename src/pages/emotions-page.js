import React from 'react';
import Layout from '../components/layout';
import "../styles/all.css";
import "../styles/emotions-page.css";
import loadable from '@loadable/component';

const Map = loadable(() => import('../components/Map'), {
  ssr: false,
});

const EmotionsPage = () => {
    return (
        <Layout>
            <div className="emotions-container">
                <h1 className="emotions-title">Emotions Map</h1>
                <div className="map-placeholder">
                    <h2 className="placeholder-text">Map Implementation Coming Soon...</h2>
                </div>
            </div>
        </Layout>
    );
};

export default EmotionsPage;