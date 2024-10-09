/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR : true
  },
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  //pathPrefix: "/empathy-bytes-2023",
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://empathybytes.library.gatech.edu/`
      },
    },
  ],
}
