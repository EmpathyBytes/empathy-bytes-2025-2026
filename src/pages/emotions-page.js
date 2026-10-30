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
            <div className="emotions-map-container">
                <Map style={{ height: '100%', width: '100%' }} />
            </div>
        </Layout>
    );
};

export default EmotionsPage;