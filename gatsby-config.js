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
        skipFileDownloads: true, // Skip downloading files during build
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
            "fields[node--article]": "title,field_author,field_video_url,field_hg_dateline,field_blurb,body,field_transcript,path,relationships",
            "filter[status]": "1"
          },
          "node--collection": {
            "include": "field_image",
            "fields[node--collection]": "title,body,path,relationships",
            "filter[status]": "1"
          }
        }
      },
    },
  ],
}
