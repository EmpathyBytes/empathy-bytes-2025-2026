const { format } = require('@splidejs/splide/src/js/utils');

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR : true,
    FAST_DEV: true, // Enable fast development mode
    PRESERVE_FILE_DOWNLOAD_CACHE: true, // Preserve file cache between builds
    PARALLEL_SOURCING: true, // Run source plugins in parallel
  },
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  //pathPrefix: "/empathy-bytes-2023",
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://empathybytes.library.gatech.edu/`,
        // Performance optimizations
        apiBase: `jsonapi`, // Use JSON:API instead of REST
        skipFileDownloads: false, // False to enable image processing
        concurrentRequests: 10, // Increase concurrent requests
        requestTimeout: 30000, // Increase timeout for slow responses
        // Only fetch what you need
        filters: {
          "node--article": "status=1", // Only published articles
          "node--collection": "status=1", // Only published collections
        },
        // Enable caching
        cache: true,
        // Reduce data transfer
        params: {
          "node--article": {
            "include": "field_image,field_audio,field_tags",
            "fields[node--article]": "title,field_author,field_video_url,field_hg_dateline,field_blurb,body,field_transcript,path,relationships"
          },
          "node--collection": {
            "include": "field_image",
            "fields[node--collection]": "title,body,path,relationships"
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          // Defines default options for generated images
          formats: ['auto', 'webp', 'avif'], 
          placeholder: 'blurred', // Type of image placeholder
          quality: 100, // Percentage of image quality
          // breakpoints: [], // Image widths to be generated, specify custom breakpoints if auto is not working
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
}
