import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/new_teamspage.css';

const NewTeamsPage = ({ data }) => {
    const teams = data?.allNodeTeam?.nodes || [
        { id: '1', title: 'Media Team', path: { alias: '/teams/media' } },
        { id: '2', title: 'App Team', path: { alias: '/teams/app' } },
        { id: '3', title: 'Web Team', path: { alias: '/teams/web' } },
        { id: '4', title: 'VR Team', path: { alias: 'teams/vr' } },
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

export default NewTeamsPage;

export const query = graphql`
    query TeamsPageQuery {
    allNodeTeam {
        nodes {
            id
            title
            path {
                alias
            }
            relationships {
                field_media_image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(width: 1200, placeholder: BLURRED)
                        }
                    }
                }
            }
        }
    }
`;