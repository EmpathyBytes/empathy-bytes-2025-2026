import * as React from "react";
//import Box from "@mui/material/Box";
import Layout from "../components/layout";

const container = {
    padding: "6% 5% 6% 5%",
    paddingTop: 180,
};

const projectsPage = () => {
    return (
        <Layout>
            <div style={container}>
                <h1> projects </h1>
            </div>
        </Layout>
    );
}

export default projectsPage;