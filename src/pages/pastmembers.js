import React from "react";
import members from "../database/past"

import Grid from '@mui/material/Unstable_Grid2';

import Layout from "../components/layout"
import PastPreview from "../components/pastPreview"


const topPadding = {
    padding: "10% 5% 10% 5%",
  };

const articlePadding = {
  padding: ".5% .5% .5% .5%"
}

function pastmembers() {
    return(
        <Layout>
            <div style={topPadding}>
              <h1>Past Members</h1>
              <div>

                <Grid container spacing={2}>
                    {members.map(article => (
                        <Grid xs={4}>
                            <div style={articlePadding}>
                                <PastPreview
                                    key = {article.id}
                                    name = {article.name}
                                    year = {article.year}
                                    image = {article.image}
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid>
              </div>
            </div>
        </Layout>
    )
}


export default pastmembers;