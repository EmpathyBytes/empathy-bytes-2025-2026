import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/new_teamspage.css';

function NewTeamsPage({ data }) {
    const webName = data?.webTeam.name || "Web";
    const appName = data.appTeam.name || "App";
    const vrName = data?.vrTeam?.name || "VR";
    const mediaName = data?.mediaTeam?.name || "Media";

    const teams = [
        { title: mediaName, path: "/teams/media" },
        { title: appName, path: "/teams/app" },
        { title: webName, path: "/teams/web" },
        { title: vrName, path: "/teams/vr" },
    ];

    return (
        <Layout>
            <div className="teams-container">
                <section className="teams-header">
                    <h1>Teams</h1>
                    <p>Explore our different sub-teams and the unique projects each is working on.</p>
                </section>

                <section className="teams-list">
                    {teams.map((team) => {
                        const imageUrl = team.relationship?.field_media_image?.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;

                        return (
                            <Link
                            to={team.path?.alias || '#'}
                            key={team.id}
                            className="team-card"
                            >
                                {imageUrl && (
                                    <img
                                        src={imageUrl}
                                        alt={team.title}
                                        className="team-card-image"
                                    />
                                )}
                                <span className="team-card-title">{team.title || team.name}</span>
                            </Link>
                        );    
                    })};
                </section>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query TeamsPageQuery {
        webTeam: taxonomyTermTeam(name : { eq: "Web" }) {
            name
        }
        appTeam: taxonomyTermTeam(name : { eq: "App" }) {
            name
        }
        vrTeam: taxonomyTermTeam(name : { eq: "VR" }) {
            name
        }
        mediaTeam: taxonomyTermTeam(name : { eq: "Media" }) {
            name
        }
    }
`;

export default NewTeamsPage;

export const Head = () => (
  <>
    <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
    <title>About | Empathy Bytes VIP</title>
    <meta
      name="description"
      content="Explore Empathy Bytes VIP sub-teams: Web, App, Media, and VR."
    />
  </>
);